import { Link } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext, useState } from "react";
import { AuthContext } from "@/shared/context/AuthContext";
import ModalError from "../modals/ModalError";

const Header = () => {

  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);
  const [errorIsOpen, setErrorIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const sendLogout = async () => {
    try {
      await sendRequest({
        key: 3,
        url: import.meta.env.VITE_SHINEDERU_API_URL + "/auth/logout",
        method: "POST",
        headers: { Authorization: authCtx.token },
        onSuccess: () => {
          authCtx.setIsLoggedIn(false);
          authCtx.setMail("");
          authCtx.setPseudo("");
          authCtx.setPk(0);
          authCtx.setToken("");
          authCtx.setPermission(0);
        },
        onError: (error) => {
          setErrorMessage(error); // Stocke le message d'erreur
          setErrorIsOpen(true); // Ouvre la modale
        },

      });
    } catch (error) {
      alert(`Erreur : ${error}`);
    }
  };

  return (
    <>
      <header>
        <h1 className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-5 text-center text-2xl font-bold text-white tracking-wider shadow-md">
          <Link to="/">Shinederu.lol</Link>
        </h1>

        {/* Navbar avec les liens centrés et le bouton à droite */}
        <nav className="flex items-center justify-between bg-[#1a1a1a] py-7 px-6">
          {/* Conteneur des liens de navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 flex space-x-10">
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/">Accueil</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/channels">Les Chaînes</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/community">Communauté</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/aboutme">À Propos</Link>
          </div>

          {/* Bouton connexion à droite */}
          <div className="absolute right-6">
            {authCtx.isLoggedIn ? (
              <button onClick={sendLogout} className="text-white text-lg transition hover:text-[#cb1111]">
                Se déconnecter
              </button>
            ) : (
              <ModalLogin />
            )}
          </div>
        </nav>

        {/* Modal Error */}
        {errorIsOpen && (
          <ModalError
            isOpen={errorIsOpen}
            message={errorMessage}
            setIsOpen={setErrorIsOpen}
          />
        )}
      </header>

      <div>
        {errorIsOpen && (
          <ModalError
            isOpen={errorIsOpen}
            message={errorMessage}
            setIsOpen={setErrorIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default Header;
