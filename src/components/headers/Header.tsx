import { Link } from "react-router-dom";
import ModalLogin from "../modals/ModalLogin";
import { useContext } from "react";
import { AuthContext } from "@/shared/context/AuthContext";
import ProfileHeader from "./ProfileHeader";


const Header = () => {

  const authCtx = useContext(AuthContext);

  return (
    <>
      <header>
        <h1 className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] p-5 text-center text-3xl tracking-wider">
          {authCtx.isLoggedIn === true ? <Link to="/dashboard">Salutation <b>{authCtx.username}</b> !</Link> : <Link to="/" className="font-bold "> Shinederu.lol</Link>}
        </h1>

        {/* Navbar avec les liens centrés et le bouton à droite */}
        <nav className="flex items-center bg-[#1a1a1a] py-7">
          {/* Conteneur des liens de navigation */}
          <div className="absolute left-1/2 -translate-x-1/2 space-x-10">
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/">Accueil</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/channels">Les Chaînes</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/community">Communauté</Link>
            <Link className="text-white text-lg transition-colors duration-300 hover:text-[#6a11cb]" to="/aboutme">À Propos</Link>
          </div>

          {/* Bouton connexion à droite */}
          <div className="absolute right-6">
            {authCtx.isLoggedIn ? (
              <ProfileHeader />
            ) : (
              <ModalLogin />
            )}
          </div>
        </nav>

        {/* Modal Error */}
      </header>
    </>
  );
};

export default Header;
