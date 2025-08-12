import { AuthContext } from "@/shared/context/AuthContext";
import { ModalContext } from "@/shared/context/ModalContext";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {

    const { sendRequest } = useHttpClient();
    const authCtx = useContext(AuthContext);
    const modalCtx = useContext(ModalContext);


    const sendLogout = async () => {
        try {
            await sendRequest({
                key: 3,
                url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
                method: "POST",
                body: {
                    action: "logout",
                },
                onSuccess: () => {
                    authCtx.setAuthData({
                        isLoggedIn: false,
                        id: 0,
                        username: '',
                        email: '',
                        role: '',
                        created_at: '',
                    });
                },
                onError: (error) => {
                    modalCtx.open(error, "error");
                },
            });
        } catch (error) {
            modalCtx.open(error + "", "error");
        }
    };


    return (
        <>
            <div className="flex gap-6 justify-center text-lg">
                <Link to="/dashboard" className="transition-colors duration-300 hover:text-[#6a11cb]">
                    Dashboard
                </Link>
                <button onClick={sendLogout} className="transition hover:text-[#cb1111]">
                    Se déconnecter
                </button>
            </div>


        </>
    )

}

export default ProfileHeader;