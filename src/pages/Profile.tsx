import { useContext, useState } from "react";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { AuthContext } from "@/shared/context/AuthContext";
import { ModalContext } from "@/shared/context/ModalContext";
import Title from "@/components/decoration/Title";
import { DateTimeFormatter } from "@/utils/DateTimeFormatter";
import { UserType } from "@/types/User";
//import { ChangePasswordType, UserType } from "@/types/User";


const Profile = () => {


    const { sendRequest } = useHttpClient();
    const authCtx = useContext(AuthContext);
    const modalCtx = useContext(ModalContext);
    const [editMode, setEditMode] = useState(false);
    const [editedUser, setEditedUser] = useState<UserType>({
        id: authCtx.id,
        username: authCtx.username,
        email: authCtx.email,
        role: authCtx.role,
        created_at: authCtx.created_at
    });


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
        </>
    );
};

export default Profile;
