import { useEffect, useContext, useState } from "react";
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
        pk_user: 0,
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        is_active: false,
        created_at: "",
        permission: 0
    }
    const emptyPassword = {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    }


    const [user, setUser] = useState<UserType>(emptyUser);
    const [editedUser, setEditedUser] = useState<UserType>(emptyUser);

    const [passwordForm, setPasswordForm] = useState<ChangePasswordType>(emptyPassword);


    useEffect(() => {
        const fetchUserProfile = async () => {
            sendRequest({
                key: 4,
                url: import.meta.env.VITE_SHINEDERU_API_URL + "/auth/profile",
                method: "GET",
                headers: { Authorization: authCtx.token },
                onSuccess: (data) => {
                    setUser(data);
                    setEditedUser(data);
                },
                onError: (error) => {
                    modalCtx.setMessage(error);
                    modalCtx.setType("error");
                    modalCtx.setIsOpen(true);
                },
            });
        };

        fetchUserProfile();
    }, [authCtx.token]);


    const updateUserProfile = async () => {
        sendRequest({
            key: 5,
            url: import.meta.env.VITE_SHINEDERU_API_URL + "/auth/editProfile",
            method: "POST",
            headers: { Authorization: authCtx.token },
            body: editedUser,
            onSuccess: (data) => {
                modalCtx.setMessage(data.message);
                modalCtx.setType("confirm");
                modalCtx.setIsOpen(true);
                setUser(editedUser);
                setIsEditMode(false);
            },
            onError: (error) => {
                modalCtx.setMessage(error);
                modalCtx.setType("error");
                modalCtx.setIsOpen(true);
            },
        });
    };

    const changePassword = async () => {
        sendRequest({
            key: 5,
            url: import.meta.env.VITE_SHINEDERU_API_URL + "/auth/editProfile",
            method: "POST",
            headers: { Authorization: authCtx.token },
            body: editedUser,
            onSuccess: (data) => {
                modalCtx.setMessage(data.message);
                modalCtx.setType("confirm");
                modalCtx.setIsOpen(true);
                setUser(editedUser);
                setIsEditMode(false);
            },
            onError: (error) => {
                modalCtx.setMessage(error);
                modalCtx.setType("error");
                modalCtx.setIsOpen(true);
            },
        });
    };

    const handleChange = (e: any) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
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

    if (!user) {
        return <p className="text-center text-gray-500">Aucune donnée utilisateur trouvée.</p>;
    }

    return (
        <>
            <div className="flex flex-col justify-center w-11/12 mx-auto gap-4">
                <Title size={1} title={"Profile de " + user.username} />
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
                            <p className="my-auto text-start">#{user?.pk_user}</p>
                            <label className="font-semibold text-end my-auto">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={editedUser.email}
                                onChange={handleChange}
                                className="p-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />

                            <span className="font-semibold text-end my-auto">État du compte:</span>
                            <p className="my-auto text-start">

                                <span className={user.is_active ? "text-green-500" : "text-red-500"}>
                                    {user.is_active ? " Actif" : " Désactivé"}
                                </span>
                            </p>

                            <label className="font-semibold text-end my-auto">Nom:</label>
                            <input
                                type="text"
                                name="last_name"
                                value={editedUser.last_name}
                                onChange={handleChange}
                                className="p-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />
                            <span className="font-semibold text-end  my-auto ">Créé le:</span>
                            <p className="my-auto text-start">{formatDate(user.created_at || "")}</p>

                            <label className="font-semibold text-end my-auto">Prénom:</label>
                            <input
                                type="text"
                                name="first_name"
                                value={editedUser.first_name}
                                onChange={handleChange}
                                className="p-2 bg-gray-800 rounded border border-gray-600 focus:outline-none focus:border-blue-500"
                            />

                            <p />
                            <p />
                            <p />



                            <button
                                onClick={() => setIsEditMode(false)}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition mt-4">
                                Annuler
                            </button>

                            <button
                                onClick={() => { updateUserProfile(); setIsEditMode(false); }}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mt-4">
                                Enregistrer
                            </button>


                        </div>
                    </div>
                ) : (
                    <div className="w-6/12 mx-auto bg-[#10101f] rounded-3xl p-4">
                        <div className="grid grid-cols-4 grid-rows-5 gap-y-2 gap-x-4">
                            <span className="font-semibold text-end my-auto">Nom d'utilisateur:</span>
                            <p className="my-auto text-start"> {user.username}</p>
                            <span className="font-semibold text-end my-auto">Identifiant Unique:</span>
                            <p className="my-auto text-start"> #{user.pk_user}</p>
                            <span className="font-semibold text-end my-auto">Email:</span>
                            <p className="my-auto text-start"> {user.email}</p>
                            <span className="font-semibold text-end my-auto">État du compte:</span>
                            <p className="my-auto text-start">
                                <span className={user.is_active ? "text-green-500" : "text-red-500"}>
                                    {user.is_active ? " Actif" : " Désactivé"}
                                </span>
                            </p>
                            <span className="font-semibold text-end my-auto">Nom:</span>
                            <p className="my-auto text-start"> {user.last_name}</p>
                            <span className="font-semibold text-end my-auto">Créé le:</span>
                            <p className="my-auto text-start"> {formatDate(user.created_at || "")}</p>
                            <span className="font-semibold text-end my-auto">Prénom:</span>
                            <p className="my-auto text-start"> {user.first_name}</p>
                            <p /><p /><p />
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
                                value={""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-2"
                            />
                        </div>
                        <div>
                            <label className="font-semibold">Nouveau mot de passe:</label>
                            <input
                                type="password"
                                name="newPassword"
                                placeholder="Nouveau mot de passe"
                                value={""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-2"
                            />
                        </div>
                        <div>
                            <label className="font-semibold">Confirmer le mot de passe:</label>
                            <input
                                type="password"
                                name="ConfirmNewPassword"
                                placeholder="Confirmer le mot de passe"
                                value={""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-700 rounded bg-[#202020]  mb-4"
                            />
                        </div>
                        <button
                            onClick={() => setIsEditMode(true)}
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
