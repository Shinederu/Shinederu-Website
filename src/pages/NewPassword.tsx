import Title from "@/components/decoration/Title";
import { ModalContext } from "@/shared/context/ModalContext";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {

    const [newPassword, setNewPassword] = useState<{ password: string, passwordConfirm: string }>({ password: "", passwordConfirm: "" });
    const navigate = useNavigate();
    const { sendRequest } = useHttpClient();
    const modalCtx = useContext(ModalContext);

    useEffect(() => {
        const token = new URLSearchParams(location.search).get('token');
        if (!token) {
            navigate("/");
            return;
        }
    }, []);


    const sumbitNewPassword = async () => {

        await sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'PUT',
            body: { action: "resetPassword", token: new URLSearchParams(location.search).get('token'), password: newPassword.password, passwordConfirm: newPassword.passwordConfirm },
            onSuccess: (data) => {
                navigate("/login");
                setNewPassword({ password: "", passwordConfirm: "" });
                modalCtx.open(data.message, "info", "", () => {
                    navigate("/");
                    return;
                });
            },
            onError: (error) => {
                modalCtx.open(error, "error");
            }
        });
    }

    return (
        <>
            <Title title="Réinitialisation du mot de passe" size={1} />
            <label>Nouveau mot de passe
                <input
                    type="password"
                    name="new password"
                    value={newPassword.password}
                    onChange={(event) => { setNewPassword({ ...newPassword, password: event.target.value }) }}
                    className="p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
                />
            </label>
            <label>Confirmer le mot de passe
                <input
                    type="password"
                    name="confirm password"
                    value={newPassword.passwordConfirm}
                    onChange={(event) => { setNewPassword({ ...newPassword, passwordConfirm: event.target.value }) }}
                    className="p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
                />
            </label>
            <button onClick={sumbitNewPassword}>Valider</button>

        </>
    )
}


export default NewPassword;