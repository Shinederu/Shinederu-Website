import { useContext, useState } from "react";
import { X } from "lucide-react"; // Icône de croix pour fermer
import { useHttpClient } from "@/shared/hooks/http-hook";
import { AuthContext } from "@/shared/context/AuthContext";
import ModalError from "./ModalError";
import ModalConfirm from "./ModalConfirm";

const ModalLogin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [errorIsOpen, setErrorIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [confirmIsOpen, setConfirmIsOpen] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");
    const { sendRequest } = useHttpClient();
    const authCtx = useContext(AuthContext);


    const [formData, setFormData] = useState({
        loginUsername: "",
        loginPassword: "",
        registerUsername: "",
        registerMail: "",
        registerPassword: "",
        registerConfirmPassword: "",
    });



    const sendRegister = () => {

        if (!formData.registerUsername || !formData.registerMail || !formData.registerPassword || !formData.registerConfirmPassword) {
            alert("Tous les champs doivent être remplis !");
            return;
        }

        if (formData.registerPassword !== formData.registerConfirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        sendRequest({
            key: 2,
            url: import.meta.env.VITE_SHINEDERU_API_URL + '/auth/register',
            method: 'POST',
            body: {
                username: formData.registerUsername,
                email: formData.registerMail,
                password: formData.registerPassword
            },
            headers: { Authorization: authCtx.token },
            onSuccess: () => {
                setConfirmMessage(`Compte créé, vous pouvez vous connecter !`); // Stocke le message de confirmation
                setConfirmIsOpen(true); // Ouvre la modale
            },
            onError: (error) => {
                setErrorMessage(error); // Stocke le message d'erreur
                setErrorIsOpen(true); // Ouvre la modale
            },
        });
    };

    const sendLogin = () => {

        if (!formData.loginUsername || !formData.loginPassword) {
            alert("Veuillez entrer un pseudo/email et un mot de passe !");
            return;
        }

        sendRequest({
            key: 3,
            url: import.meta.env.VITE_SHINEDERU_API_URL + '/auth/login',
            method: 'POST',
            body: {
                username: formData.loginUsername,
                password: formData.loginPassword
            },
            onSuccess: (data) => {
                authCtx.setIsLoggedIn(true);
                authCtx.setMail(data.user.email);
                authCtx.setPseudo(data.user.username);
                authCtx.setPk(data.user.pk);
                authCtx.setToken(data.token);
                setIsOpen(false);
            },
            onError: (error) => {
                setErrorMessage(error); // Stocke le message d'erreur
                setErrorIsOpen(true); // Ouvre la modale
            },
        });
    };

    const sanitizeInput = (input: string) => {
        return input
            .trim()
            .replace(/[<>/'"\\&]/g, '')
            .replace(/\s+/g, ' ');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: sanitizeInput(e.target.value)
        });
    };

    return (
        <>
            {/* Bouton pour ouvrir la modal */}
            <button
                onClick={() => setIsOpen(true)}            >
                Connexion/Inscription
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white text-black rounded-lg shadow-lg w-full max-w-4xl border border-gray-300">
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
                            <h2 className="text-xl font-bold">Connexion / Inscription</h2>
                            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-black transition">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 grid grid-cols-2 gap-6">
                            {/* Connexion */}
                            <div className="bg-slate-100 p-4 rounded-md">
                                <h3 className="text-lg font-semibold mb-4">Connexion</h3>
                                <form>
                                    <input
                                        type="text"
                                        name="loginUsername"
                                        placeholder="Pseudo ou Email"
                                        value={formData.loginUsername}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-2" />
                                    <input
                                        type="password"
                                        name="loginPassword"
                                        placeholder="Mot de passe"
                                        value={formData.loginPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-4" />
                                </form>

                            </div>

                            {/* Inscription */}
                            <div className="bg-slate-100 p-4 rounded-md">
                                <h3 className="text-lg font-semibold mb-4">Inscription</h3>
                                <form>
                                    <input
                                        type="text"
                                        name="registerUsername"
                                        placeholder="Pseudo"
                                        value={formData.registerUsername}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-2" />
                                    <input
                                        type="email"
                                        name="registerMail"
                                        placeholder="Email"
                                        value={formData.registerMail}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-2" />
                                    <input
                                        type="password"
                                        name="registerPassword"
                                        placeholder="Mot de passe"
                                        value={formData.registerPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-2" />
                                    <input
                                        type="password"
                                        name="registerConfirmPassword"
                                        placeholder="Confirmer le mot de passe"
                                        value={formData.registerConfirmPassword}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded mb-4" />
                                </form>

                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 grid grid-cols-2 gap-6">
                            <button type="submit" onClick={sendLogin} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Se connecter</button>
                            <button type="submit" onClick={sendRegister} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">S'inscrire</button>
                        </div>
                    </div>
                </div>


            )}
            {errorIsOpen && (
                <ModalError
                    isOpen={errorIsOpen}
                    message={errorMessage}
                    setIsOpen={setErrorIsOpen}
                />
            )}
            {confirmIsOpen && (
                <ModalConfirm
                    isOpen={confirmIsOpen}
                    message={confirmMessage}
                    setIsOpen={setConfirmIsOpen}
                />
            )}


        </>
    );
};

export default ModalLogin;
