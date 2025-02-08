import { useEffect, useContext, useState } from "react";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { AuthContext } from "@/shared/context/AuthContext";
import ModalError from "@/components/modals/ModalError";

// Définition du type pour le profil utilisateur
interface User {
    pk_user: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: number;
    created_at: string;
    permission: number;
}

const Profile = () => {
    const { sendRequest, isLoading } = useHttpClient();
    const authCtx = useContext(AuthContext);

    const [user, setUser] = useState<User | null>(null);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchUserProfile = async () => {
            sendRequest({
                key: 4,
                url: import.meta.env.VITE_SHINEDERU_API_URL + "/auth/profile",
                method: "GET",
                headers: { Authorization: authCtx.token },
                onSuccess: (data: User) => {
                    setUser(data);
                },
                onError: (error) => {
                    setErrorMessage(error);
                    setErrorIsOpen(true);
                },
            });
        };

        fetchUserProfile();
    }, [authCtx.token]);

    // Fonction pour formater la date
    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString("fr-FR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    };

    if (isLoading[4]) {
        return <p className="text-center text-gray-500">Chargement du profil...</p>;
    }

    if (!user) {
        return <p className="text-center text-gray-500">Aucune donnée utilisateur trouvée.</p>;
    }

    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white p-6 shadow-lg rounded-2xl w-96">
                    <h2 className="text-2xl font-bold text-center mb-4">Profil de {user?.username}</h2>
                    <div className="space-y-2">
                        <p><span className="font-semibold">ID:</span> {user?.pk_user}</p>
                        <p><span className="font-semibold">Nom d'utilisateur:</span> {user?.username}</p>
                        <p><span className="font-semibold">Email:</span> {user?.email}</p>
                        <p><span className="font-semibold">Nom:</span> {user?.first_name} {user?.last_name}</p>
                        <p>
                            <span className="font-semibold">État du compte:</span>
                            <span className={user?.is_active ? "text-green-600" : "text-red-600"}>
                                {user?.is_active ? " Actif" : " Désactivé"}
                            </span>
                        </p>
                        <p><span className="font-semibold">Créé le:</span> {formatDate(user?.created_at || "")}</p>
                    </div>
                </div>
            </div>
            {errorIsOpen && (
                <ModalError
                    isOpen={errorIsOpen}
                    message={errorMessage}
                    setIsOpen={setErrorIsOpen}
                />
            )}
        </>
    );
};

export default Profile;
