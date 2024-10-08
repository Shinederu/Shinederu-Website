import { createRoot } from "react-dom/client";
import { AuthProvider } from '@/shared/context/AuthContext.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import '@/index.css';

// Point d'entrée de l'application React
createRoot(document.getElementById('app')!).render(
  /* Contexte d'authentification */
  <AuthProvider>
    {/* Contexte de configuration */}
      {/* Context de NextUI */}
      <NextUIProvider>
        {/* Permet le routage avec react-router-dom */}
        <BrowserRouter>
          {/* Composant principal de l'application */}
          <App/>
        </BrowserRouter>
      </NextUIProvider>
  </AuthProvider>
);
