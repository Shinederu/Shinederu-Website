import { useContext, useState } from "react";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { AuthContext } from "@/shared/context/AuthContext";
import { ModalContext } from "@/shared/context/ModalContext";
import Title from "@/components/decoration/Title";
import { DateTimeFormatter } from "@/utils/DateTimeFormatter";
import { UserType } from "@/types/User";
import { useNavigate } from "react-router-dom";
//import { ChangePasswordType, UserType } from "@/types/User";


const Profile = () => {


    const { sendRequest } = useHttpClient();
    const authCtx = useContext(AuthContext);
    const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState<UserType>({
        id: authCtx.id,
        username: authCtx.username,
        email: authCtx.email,
        role: authCtx.role,
        created_at: authCtx.created_at
    });
    const [newEmail, setNewEmail] = useState<{ email: string, emailConfirm: string }>({ email: "", emailConfirm: "" });


    const updateUserProfile = async () => {
        await sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'POST',
            body: { action: "updateProfile", username: editedUser.username },
            onSuccess: () => {
                authCtx.setAuthData({
                    username: editedUser.username,
                });
            },
            onError: (error) => {
                editedUser.username = authCtx.username;
                modalCtx.open(error, "error");
            },
        });
        setEditMode(false);
    }

    const updatePassword = async () => {
        await sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'POST',
            body: { action: "requestPasswordReset", email: authCtx.email },
            onSuccess: () => {
                modalCtx.open("Un email de modification du mot de passe a été envoyé à votre adresse email.", "result");
            },
            onError: (error) => {
                editedUser.username = authCtx.username;
                modalCtx.open(error, "error");
            },
        });
    }

    const sendNewEmailRequest = async () => {

        await sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'PUT',
            body: {
                action: "requestEmailUpdate",
                email: newEmail.email,
                emailConfirm: newEmail.emailConfirm
            },
            onSuccess: (data) => {
                modalCtx.open(data.message, "result", "", () => {
                });
                setNewEmail({ email: "", emailConfirm: "" });
            },
            onError: (error) => {
                modalCtx.open(error, "error");
            }

        });
    }

    return (
        <>
            <Title size={1} title={"Profile de " + authCtx.username} />
            <div>
                {editMode ? (
                    <div>
                        <div>Identifiant unique: #{authCtx.id}</div>
                        <label>
                            Nom d'utilisateur
                            <input
                                type="text"
                                name="username"
                                value={editedUser.username}
                                onChange={(event) => { setEditedUser({ ...editedUser, username: event.target.value }) }}
                                className="p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
                            />
                        </label>
                        <div>Email: {authCtx.email}</div>
                        <div>Créé le: {DateTimeFormatter(authCtx.created_at)}</div>

                        <button onClick={() => setEditMode(false)}>Annuler</button>
                        <button onClick={updateUserProfile}>Enregistrer</button>
                    </div>
                ) : (
                    <div>
                        <div>Identifiant unique: #{authCtx.id}</div>
                        <div>Nom d'utilisateur: {authCtx.username}</div>
                        <div>Email: {authCtx.email}</div>
                        <div>Créé le: {DateTimeFormatter(authCtx.created_at)}</div>
                        <button onClick={() => setEditMode(true)}>Éditer</button>
                    </div>
                )}
            </div>
            <div>
                <section>
                    <button onClick={updatePassword}>Modifier votre mot de passe</button>
                </section>
                <section>
                    <Title size={3} title="Zone Dangereuse" />
                    <button onClick={() => { navigate("/resetPassword") }}>Modifier mon mot de passe</button>
                    <div>
                        <label>
                            Nouvelle adresse email
                            <input
                                type="email"
                                name="email"
                                value={newEmail.email}
                                onChange={(event) => { setNewEmail({ ...newEmail, email: event.target.value }) }}
                                className="p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
                            />
                        </label>
                        <label>
                            Confirmer l'adresse
                            <input
                                type="text"
                                name="emailConfirm"
                                value={newEmail.emailConfirm}
                                onChange={(event) => { setNewEmail({ ...newEmail, emailConfirm: event.target.value }) }}
                                className="p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
                            />
                        </label>
                        <button onClick={sendNewEmailRequest}>Demander le changement</button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Profile;
