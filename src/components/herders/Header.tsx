import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-opacity-90 bg-black text-white flex items-center relative">
      <h1 className="text-2xl font-bold">
        <Link to="/">Shinederu.lol</Link>
      </h1>
      <nav className="absolute left-1/2 transform -translate-x-1/2">
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
    </header>
  );
};

export default Header;
