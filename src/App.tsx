import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/herders/Header";
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
    <>
      <div className="min-h-screen w-full relative">
        <iframe
          src="/web/background/index.html"
          className="fixed top-0 left-0 w-full h-full"
          style={{ zIndex: -1 }}
          allow="fullscreen"
        ></iframe>
        <Header />
        {/* Le Header et le Footer sont affichés conditionnellement en fonction de si l'utilisateur est autorisé à utiliser NetViewer */}
        <main className="min-h-[calc(100dvh-64px)]">
          <Routes>
            {getRoutes()}
          </Routes>
        </main>
        <Footer />
      </div>
    </>

  );
};

export default App;