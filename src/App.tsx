import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "./shared/context/AuthContext";

const App = () => {

  const authCtx = useContext(AuthContext);


  useEffect(() => {
    authCtx.reload();
  }, []);


  return (

    <div className="bg-[#0d0d0d] text-white font-[Poppins] min-h-screen flex flex-col">
      <Header />
      <main
        className="w-11/12 max-w-[calc(100vh*16/9)] mx-auto my-10 p-8 bg-[#1e1e1e] rounded-lg shadow-lg text-center flex-grow"
      >
        <Routes>{getRoutes(authCtx.role)}</Routes>
      </main>
      <Footer />
    </div>


  );

};

export default App;