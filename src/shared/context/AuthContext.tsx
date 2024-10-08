import { createContext, PropsWithChildren, useState } from "react";

interface AuthContextType {
    isLoggedIn: boolean;
    pk: number;
    mail: string;
    permissions: number;
    firstName: string;
    lastName: string;
    language: string;
    setIsLoggedIn: (logged: boolean) => void;
    setPk: (pk: number) => void;
    setMail: (mail: string) => void;
    setPermissions: (permissions: number) => void;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setLanguage: (language: string) => void;
}


export const AuthContext = createContext<AuthContextType>({
    isLoggedIn: false,
    pk: 0,
    mail: '',
    permissions: 0,
    firstName: '',
    lastName: '',
    language: '',
    setIsLoggedIn: () => { },
    setPk: () => { },
    setMail: () => { },
    setPermissions: () => { },
    setFirstName: () => { },
    setLastName: () => { },
    setLanguage: () => { }
});


export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [pk, setPk] = useState<number>(0);
    const [mail, setMail] = useState<string>('');
    const [permissions, setPermissions] = useState<number>(0);
    const [lastName, setLastName] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [language, setLanguage] = useState<string>('');

    const contextValue: AuthContextType = {
        isLoggedIn,
        setIsLoggedIn: (newIsLoggedIn: boolean) => setIsLoggedIn(newIsLoggedIn),
        pk,
        setPk: (newPk: number) => setPk(newPk),
        mail,
        setMail: (newMail: string) => setMail(newMail),
        permissions,
        setPermissions: (newPermissions: number) => setPermissions(newPermissions),
        lastName,
        setLastName: (newLastName: string) => setLastName(newLastName),
        firstName,
        setFirstName: (newFirstName: string) => setFirstName(newFirstName),
        language,
        setLanguage: (newLanguage: string) => setLanguage(newLanguage)
    };

    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};