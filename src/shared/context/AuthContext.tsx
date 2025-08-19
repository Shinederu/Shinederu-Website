import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { useHttpClient } from '@/shared/hooks/http-hook';

type AuthDataType = {
    isLoggedIn: boolean;
    id: number;
    username: string;
    email: string;
    avatar_url?: string;
    role: string;
    created_at: string;
};

interface AuthContextType extends AuthDataType {
    setAuthData: (authData: Partial<AuthDataType>) => void;
    reload: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    id: 0,
    username: '',
    email: '',
    avatar_url: '',
    role: '',
    created_at: '',
    setAuthData: () => { },
    reload: async () => false,
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const { sendRequest } = useHttpClient();
    const [authData, setAuthData] = useState<AuthDataType>({
        isLoggedIn: false,
        id: 0,
        username: '',
        email: '',
        avatar_url: '',
        role: '',
        created_at: '',
    });

    const updateAuthData = useCallback((newData: Partial<AuthDataType>) => {
        setAuthData(prev => ({ ...prev, ...newData }));
    }, []);

    const reload = useCallback(async (): Promise<boolean> => {
        let ok = true;
        await sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'GET',
            body: { action: 'me' },
            onSuccess: (data) => {
                updateAuthData({
                    isLoggedIn: true,
                    id: data.user.id,
                    username: data.user.username,
                    email: data.user.email,
                    avatar_url: data.user.avatar_url,
                    role: data.user.role,
                    created_at: data.user.created_at,
                });
            },
            onError: () => {
                ok = false;
                updateAuthData({
                    isLoggedIn: false,
                    id: 0,
                    username: '',
                    email: '',
                    avatar_url: '',
                    role: '',
                    created_at: '',
                });
            },
        });
        return ok;
    }, [sendRequest, updateAuthData]);

    const contextValue: AuthContextType = {
        ...authData,
        setAuthData: updateAuthData,
        reload,
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};
