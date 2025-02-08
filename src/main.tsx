import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./shared/context/AuthContext";

createRoot(document.getElementById('app')!).render(
  /* Contexte d'authentification */
  <AuthProvider>
    {/* Permet le routage avec react-router-dom */}
    <BrowserRouter>
      {/* Composant principal de l'application */}
      <App />
    </BrowserRouter>
  </AuthProvider>
);