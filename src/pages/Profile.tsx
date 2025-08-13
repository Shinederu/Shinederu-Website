import { useContext, useState } from "react";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { AuthContext } from "@/shared/context/AuthContext";
import { ModalContext } from "@/shared/context/ModalContext";
import Title from "@/components/decoration/Title";
import { ChangePasswordType, UserType } from "@/types/User";


const Profile = () => {


    const { sendRequest, isLoading } = useHttpClient();
    const authCtx = useContext(AuthContext);
    const modalCtx = useContext(ModalContext);
    const [isEditMode, setIsEditMode] = useState<Boolean>(false);
    const emptyUser = {
        id: 0,
        username: '',
        email: '',
        role: '',
        created_at: '',
    }
    const emptyPassword = {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    }

    const [editedUser, setEditedUser] = useState<UserType>(emptyUser);

    const [passwordForm, setPasswordForm] = useState<ChangePasswordType>(emptyPassword);


    const updateUserProfile = async () => {

        if (!editedUser.username || !editedUser.email) {
            modalCtx.open("Veuillez remplir tous les champs obligatoires.", "error");
            return;
        }

        sendRequest({
            key: 5,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: "POST",
            body: editedUser,
            onSuccess: (data) => {
                modalCtx.open(data.message, "info");
                authCtx.setAuthData(editedUser);
                setIsEditMode(false);
            },
            onError: (error) => {
                modalCtx.open(error, "error");
            },
        });
    };

    const changePassword = async () => {

        if (!passwordForm.newPassword || !passwordForm.confirmNewPassword || !passwordForm.currentPassword) {
            modalCtx.open("Tous les champs doivent être remplis !", "error");
            return;
        }

        if (passwordForm.newPassword !== passwordForm.confirmNewPassword) {
            modalCtx.open("Les mots de passe ne correspondent pas !", "error");
            return;
        }

        sendRequest({
            key: 5,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: "POST",
            body: passwordForm,
            onSuccess: (data) => {
                modalCtx.open(data.message, "result");
            },
            onError: (error) => {
                modalCtx.open(error, "error");
            },
        });
    };

    const handleChange = (e: any) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value.trim().replace(/[<>/'"\\&]/g, "").replace(/\s+/g, " ") });
    };
    const handleChangePassword = (e: any) => {
        setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value.trim().replace(/[<>/'"\\&]/g, "").replace(/\s+/g, " ") });
    };

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

    if (!authCtx.isLoggedIn) {
        return <p className="text-center text-gray-500">Aucune donnée utilisateur trouvée.</p>;
    }

    return (
        <>
            <div className="flex flex-col justify-center w-11/12 mx-auto gap-4">
                <Title size={1} title={"Profile de " + authCtx.username} />
                {isEditMode ? (
                    <div className="w-6/12 mx-auto bg-[#10101f] rounded-3xl p-4">
                        <div className="grid grid-cols-4 grid-rows-5 gap-y-2 gap-x-4">
                            <label className="font-semibold text-end my-auto">Nom d'utilisateur:</label>
                            <input
                                type="text"
                                name="username"
                                value={editedUser.username}
                                onChange={handleChange}
                                className="p-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                            <span className="font-semibold text-end my-auto">Identifiant Unique:</span>
                            <p className="my-auto text-start">#{authCtx?.id}</p>
                            <label className="font-semibold text-end my-auto">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={editedUser.email}
                                onChange={handleChange}
                                className="p-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                            <span className="font-semibold text-end  my-auto ">Créé le:</span>
                            <p className="my-auto text-start">{formatDate(authCtx.created_at || "")}</p>

                            <br />
                            <br />
                            <br />



                            <button
                                onClick={() => setIsEditMode(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4">
                                Annuler
                            </button>

                            <button
                                onClick={() => { updateUserProfile() }}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-4">
                                Enregistrer
                            </button>


                        </div>
                    </div>
                ) : (
                    <div className="w-6/12 mx-auto bg-[#10101f] rounded-3xl p-4">
                        <div className="grid grid-cols-4 grid-rows-5 gap-y-2 gap-x-4">
                            <span className="font-semibold text-end my-auto">Nom d'utilisateur:</span>
                            <p className="my-auto text-start"> {authCtx.username}</p>
                            <span className="font-semibold text-end my-auto">Identifiant Unique:</span>
                            <p className="my-auto text-start"> #{authCtx.id}</p>
                            <span className="font-semibold text-end my-auto">Email:</span>
                            <p className="my-auto text-start"> {authCtx.email}</p>
                            <span className="font-semibold text-end my-auto">Créé le:</span>
                            <p className="my-auto text-start"> {formatDate(authCtx.created_at || "")}</p>
                            <br />
                            <br />
                            <br />
                            <button
                                onClick={() => setIsEditMode(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition col-span-2 mt-4">
                                Éditer
                            </button>
                        </div>
                    </div>
                )}
                <div className="w-6/12 mx-auto bg-[#10101f] rounded-3xl p-4 mt-2">
                    <Title size={2} title="Changer de mot de passe" />
                    <div className="flex flex-col w-1/2 mx-auto gap-4 text-start">
                        <div>
                            <label className="font-semibold">Mot de passe actuel:</label>
                            <input
                                type="password"
                                name="currentPassword"
                                placeholder="Mot de passe actuel"
                                value={passwordForm.currentPassword}
                                onChange={handleChangePassword}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-2"
                            />
                        </div>
                        <div>
                            <label className="font-semibold">Nouveau mot de passe:</label>
                            <input
                                type="password"
                                name="newPassword"
                                placeholder="Nouveau mot de passe"
                                value={passwordForm.newPassword}
                                onChange={handleChangePassword}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-2"
                            />
                        </div>
                        <div>
                            <label className="font-semibold">Confirmer le mot de passe:</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                placeholder="Confirmer le mot de passe"
                                value={passwordForm.confirmNewPassword}
                                onChange={handleChangePassword}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-4"
                            />
                        </div>
                        <button
                            onClick={() => changePassword()}
                            className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
                            Modifier
                        </button>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Profile;
