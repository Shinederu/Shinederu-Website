import Title from "@/components/decoration/Title";
import { ModalContext } from "@/shared/context/ModalContext";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



const ResetPassword = () => {

    const { sendRequest } = useHttpClient();
    const [email, setEmail] = useState("");
    const modalCtx = useContext(ModalContext);
    const navigate = useNavigate();

    const sendPasswordResetRequest = async () => {
        await sendRequest({
            key: 1,
            url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
            method: 'POST',
            body: { action: "requestPasswordReset", email: email },
            onSuccess: (data) => {
                modalCtx.open(data.message, "info", "", () => {
                    setEmail("");
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
            <Title title="Demander une réinitialisation du mot de passe" size={1} />
            <label>Adresse Email</label>
            <input
                type="email"
                name="Email"
                value={email}
                placeholder="Entrez votre adresse email"
                onChange={(event) => { setEmail(event.target.value) }}
                className="w-full p-3 border border-gray-700 rounded bg-[#202020] text-white mb-2"
            />
            <button type="submit" onClick={sendPasswordResetRequest}>Envoyer</button>
        </>
    );

}


export default ResetPassword;