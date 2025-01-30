import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById('app')!).render(
  /* Permet le routage avec react-router-dom */
  <BrowserRouter>
    {/* Composant principal de l'application */}
    <App />
  </BrowserRouter>
);