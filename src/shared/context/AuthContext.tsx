import { createContext, PropsWithChildren, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    permission: number;
    token: string;
    pk: number;
    pseudo: string;
    mail: string;
    setIsLoggedIn: (logged: boolean) => void;
    setPermission: (permission: number) => void;
    setToken: (token: string) => void;
    setPk: (pk: number) => void;
    setPseudo: (pseudo: string) => void;
    setMail: (mail: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    permission: 0,
    token: '',
    pk: 0,
    pseudo: '',
    mail: '',
    setIsLoggedIn: () => { },
    setPermission: () => { },
    setToken: () => { },
    setPk: () => { },
    setPseudo: () => { },
    setMail: () => { }
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [permission, setPermission] = useState<number>(0);
    const [token, setToken] = useState<string>('');
    const [pk, setPk] = useState<number>(0);
    const [pseudo, setPseudo] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    const contextValue: AuthContextType = {
        isLoggedIn,
        setIsLoggedIn,
        permission,
        setPermission,
        token,
        setToken,
        pk,
        setPk,
        pseudo,
        setPseudo,
        mail,
        setMail
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};
