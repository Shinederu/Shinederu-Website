import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/Headers/Header";
import Footer from "./components/Footers/Footer";

const App = () => {


  return (
    <>
      <div className="min-h-screen w-full relative">
        <iframe
          src="/web/background/index.html" // Remplace par l'URL du site externe
          className="fixed top-0 left-0 w-full h-full"
          style={{ zIndex: -1 }}
          frameBorder="0"
          allow="fullscreen"
        ></iframe>
        <Header />
        {/* Le Header et le Footer sont affichés conditionnellement en fonction de si l'utilisateur est autorisé à utiliser NetViewer */}
        <main className="min-h-[calc(100dvh-64px)]">
          <Routes>
            {getRoutes()}
          </Routes>
        </main>
        <Footer />
      </div>
    </>

  );
};

export default App;