import { Link } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { useHttpClient } from "@/shared/hooks/http-hook";
import { useContext, useState } from "react";
import { AuthContext } from "@/shared/context/AuthContext";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
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
    <header className="p-4 bg-opacity-90 bg-black text-white grid grid-cols-3 items-center">
      {/* Logo à gauche */}
      <h1 className="text-2xl font-bold">
        <Link to="/">Shinederu.lol</Link>
      </h1>

      {/* Navbar parfaitement centrée */}
      <nav className="justify-self-center">
        <ul className="flex space-x-4">
          <li><Link className="hover:underline" to="/">Accueil</Link></li>
          <li><Link className="hover:underline" to="/channels">Streaming</Link></li>
          <li><Link className="hover:underline" to="/community">Communauté</Link></li>
          <li><Link className="hover:underline" to="/aboutme">À Propos</Link></li>
        </ul>
      </nav>

      {/* Bouton de connexion ou menu utilisateur */}
      <div className="justify-self-end flex items-center gap-4">
        {authCtx.isLoggedIn ? (
          <>
            <Link className="hover:underline" to="/dashboard">Dashboard</Link>
            <Dropdown>
              <DropdownTrigger>
                <Avatar name={authCtx.pseudo} size="md" className="cursor-pointer" />
              </DropdownTrigger>
              <DropdownMenu aria-label="Menu utilisateur">
                <DropdownItem key="profile">
                  <Link to="/profile" className="text-gray-800 hover:underline">Profil</Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onPress={sendLogout}>
                  Se déconnecter
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <ModalLogin />
        )}
      </div>
      {errorIsOpen && (
        <ModalError
          isOpen={errorIsOpen}
          message={errorMessage}
          setIsOpen={setErrorIsOpen}
        />
      )}
    </header>

  );
};

export default Header;
