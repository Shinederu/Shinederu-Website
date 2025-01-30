import { useCallback, useEffect, useRef, useState } from 'react';

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState<Record<number, boolean>>({});
    const [errors, setErrors] = useState<Record<number, string | null>>({});
    const activeHttpRequests = useRef<Record<number, AbortController>>({});

    const sendRequest = useCallback(
        async ({
            key,
            url,
            method = 'GET',
            body = null,
            headers = { 'Content-Type': 'application/json' },
            onError,
            onSuccess,
        }: {
            key: number;
            url: string; // URL complète pour la requête
            method?: string;
            body?: string | null;
            headers?: Record<string, string>;
            onError?: (error: string) => void; // Callback en cas d'erreur
            onSuccess?: (data: any) => void; // Callback en cas de succès
        }) => {
            setIsLoading((prev) => ({ ...prev, [key]: true }));
            const httpAbortCtrl = new AbortController();
            activeHttpRequests.current[key] = httpAbortCtrl;

            try {
                const response = await fetch(url, {
                    method,
                    body: body ? JSON.stringify(body) : null,
                    headers,
                    signal: httpAbortCtrl.signal,
                });

                const responseData = await response.json();

                if (!response.ok) {
                    const errorMessage = responseData.message || 'Une erreur est survenue';
                    setErrors((prev) => ({ ...prev, [key]: errorMessage }));
                    onError?.(errorMessage); // Appel de la callback d'erreur si définie
                    return null;
                }

                setErrors((prev) => ({ ...prev, [key]: null }));
                onSuccess?.(responseData); // Appel de la callback de succès si définie
                return responseData;
            } catch (err: any) {
                if (err.name !== 'AbortError') {
                    const errorMessage = err.message || 'Erreur inconnue';
                    setErrors((prev) => ({ ...prev, [key]: errorMessage }));
                    onError?.(errorMessage); // Appel de la callback d'erreur si définie
                }
                return null;
            } finally {
                delete activeHttpRequests.current[key];
                setIsLoading((prev) => ({ ...prev, [key]: false }));
            }
        },
        []
    );

    useEffect(() => {
        return () => {
            Object.values(activeHttpRequests.current).forEach((abortCtrl) => abortCtrl.abort());
        };
    }, []);

    return { isLoading, errors, sendRequest };
};



{/*Exemple d'utilisation:
    
    
    
  const { sendRequest, isLoading, errors } = useHttpClient();

  const fetchData = () => {
    sendRequest({
      key: 1,
      url: 'https://api.shinederu.lol/api/example',
      method: 'POST',
      body: name: 'Test',
      onError: (error) => {
        console.error('Erreur capturée :', error);
        alert(`Erreur : ${error}`);
      },
      onSuccess: (data) => {
        console.log('Succès, données reçues :', data);
      },
    });
  };
    
*/}