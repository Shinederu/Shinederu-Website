import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { useHttpClient } from "./shared/hooks/http-hook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./shared/context/AuthContext";
import ModalError from "./components/modals/ModalError";

const App = () => {

  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);
  const [errorIsOpen, setErrorIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    const sendIsConnected = async () => {
      try {
        await sendRequest({
          key: 3,
          url: import.meta.env.VITE_SHINEDERU_API_URL + '/auth/isConnected',
          method: 'GET',
          onSuccess: (data) => {
            if (data.connected) {
              authCtx.setIsLoggedIn(true);
              authCtx.setMail(data.user.email);
              authCtx.setPseudo(data.user.username);
              authCtx.setPk(data.user.pk);
              authCtx.setPermission(data.user.permission);
              authCtx.setToken(data.token);
            } else {
              authCtx.setIsLoggedIn(false);
            }
          },
          onError: () => {
            setErrorMessage("Impossible de contacter le serveur... Réessayer plus tard !"); // Stocke le message d'erreur
            setErrorIsOpen(true); // Ouvre la modale
          },
        });
      } catch (error) {
        console.error("Erreur lors de la vérification de la connexion :", error);
      }
    };

    sendIsConnected();
  }, []);


  return (
    <div className="bg-[#0d0d0d] text-white font-[Poppins] min-h-screen flex flex-col">
      <Header />
      <main className="w-11/12 mx-auto my-10 p-8 bg-[#1e1e1e] rounded-lg shadow-lg text-center flex-grow">
        <div>
          {errorIsOpen && (
            <ModalError
              isOpen={errorIsOpen}
              message={errorMessage}
              setIsOpen={setErrorIsOpen}
            />
          )}
        </div>
        <Routes>{getRoutes(authCtx.permission)}</Routes>
      </main>
      <Footer />
    </div>
  );

};

export default App;