import { createContext, PropsWithChildren, useState } from 'react';

type AuthDataType = {
    isLoggedIn: boolean;
    id: number;
    username: string;
    email: string;
    role: string;
    created_at: string;
};

interface AuthContextType extends AuthDataType {
    setAuthData: (authData: Partial<AuthDataType>) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    id: 0,
    username: '',
    email: '',
    role: '',
    created_at: '',
    setAuthData: () => { },
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [authData, setAuthData] = useState<AuthDataType>({
        isLoggedIn: false,
        id: 0,
        username: '',
        email: '',
        role: '',
        created_at: '',
    });

    // Fonction qui met à jour seulement les champs nécessaires
    const updateAuthData = (newData: Partial<AuthDataType>) => {
        setAuthData((prev) => ({ ...prev, ...newData }));
    };

    const contextValue: AuthContextType = {
        ...authData, // Déstructure authData pour inclure toutes les valeurs directement
        setAuthData: updateAuthData, // Utilise la fonction de mise à jour
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};
