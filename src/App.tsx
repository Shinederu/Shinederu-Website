import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { useHttpClient } from "./shared/hooks/http-hook";
import { useContext, useEffect } from "react";
import { AuthContext } from "./shared/context/AuthContext";

const App = () => {

  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);


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
              authCtx.setToken(data.token);
              console.log("Mise à jour du contexte, isLoggedIn:", true)
            } else {
              authCtx.setIsLoggedIn(false);
              console.log("Mise à jour du contexte, isLoggedIn:", false)
            }
          },
          onError: (error) => alert(`Erreur : ${error}`),
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
        <Routes>{getRoutes()}</Routes>
      </main>
      <Footer />
    </div>
  );

};

export default App;