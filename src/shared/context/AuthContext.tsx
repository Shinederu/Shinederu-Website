import { createContext, PropsWithChildren, useState } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    token: string;
    pk: number;
    pseudo: string;
    mail: string;
    setIsLoggedIn: (logged: boolean) => void;
    setToken: (token: string) => void;
    setPk: (pk: number) => void;
    setPseudo: (pseudo: string) => void;
    setMail: (mail: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    token: '',
    pk: 0,
    pseudo: '',
    mail: '',
    setIsLoggedIn: () => { },
    setToken: () => { },
    setPk: () => { },
    setPseudo: () => { },
    setMail: () => { }
});

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [token, setToken] = useState<string>('');
    const [pk, setPk] = useState<number>(0);
    const [pseudo, setPseudo] = useState<string>('');
    const [mail, setMail] = useState<string>('');

    console.log("Mise à jour du AuthContext - isLoggedIn:", isLoggedIn);

    const contextValue: AuthContextType = {
        isLoggedIn,
        setIsLoggedIn,
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
