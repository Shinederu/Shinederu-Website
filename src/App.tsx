import { Routes } from 'react-router-dom';
import { getRoutes } from './utils/routes';
import Header from "@comp/header/Header.tsx";

function App() {
  return (
    <>
      <Header/>
      <main className="min-h-[calc(100dvh-64px)]">
        <Routes>
          {getRoutes()}
        </Routes>
      </main>
    </>
  );
}

export default App
