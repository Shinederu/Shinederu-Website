import { Link } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext } from "react";
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

        {/* Navbar parfaitement centrée */}
        <nav className="flex justify-center bg-[#1a1a1a] py-4 shadow-md">
          <Link className="text-white mx-5 text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/">Accueil</Link>
          <Link className="text-white mx-5 text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/channels">Streaming</Link>
          <Link className="text-white mx-5 text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/community">Communauté</Link>
          <Link className="text-white mx-5 text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/aboutme">À Propos</Link>
          <div>
            {authCtx.isLoggedIn === true ? (
              <button onClick={sendLogout}>
                se déconnecter
              </button>
            ) : (
              <ModalLogin />
            )}

          </div>
        </nav>

        {/* Bouton connexion à droite */}

      </header>
            </div>
      {errorIsOpen && (
        <ModalError
          isOpen={errorIsOpen}
          message={errorMessage}
          setIsOpen={setErrorIsOpen}
        />
    </>
  );
};

export default Header;
