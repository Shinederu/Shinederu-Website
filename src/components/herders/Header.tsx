import { Link } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext } from "react";
import { AuthContext } from "@/shared/context/AuthContext";

const Header = () => {

  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);

  console.log("isLoggedIn dans le Header:", authCtx.isLoggedIn);

  const sendLogout = async () => {
    try {
      await sendRequest({
        key: 3,
        url: import.meta.env.VITE_SHINEDERU_API_URL + '/auth/logout',
        method: 'POST',
        headers: { Authorization: authCtx.token },
        onSuccess: () => {
          authCtx.setIsLoggedIn(false);
          authCtx.setMail('');
          authCtx.setPseudo('');
          authCtx.setPk(0);
          authCtx.setToken('');
        },
        onError: (error) => alert(`Erreur : ${error}`),
      });
    } catch (error) {
      alert(`Erreur : ${error}`);
    }
  };



  return (
    <header className="p-4 bg-opacity-90 bg-black text-white grid grid-cols-3 items-center">
      {/* Logo à gauche */}
      <h1 className="text-2xl font-bold">
        <Link to="/">Shinederu.lol</Link>
      </h1>

      {/* Navbar parfaitement centrée */}
      <nav className="justify-self-center">
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline" to="/">Accueil</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/channels">Streaming</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/community">Communauté</Link>
          </li>
          <li>
            <Link className="hover:underline" to="/aboutme">À Propos</Link>
          </li>
        </ul>
      </nav>

      {/* Bouton connexion à droite */}
      <div className="justify-self-end">
        {authCtx.isLoggedIn === true ? (
          <button onClick={sendLogout} className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition">
            se déconnecter
          </button>
        ) : (
          <ModalLogin />
        )}

      </div>
    </header>
  );
};

export default Header;




