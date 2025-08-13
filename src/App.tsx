import { Routes } from "react-router-dom";
import { getRoutes } from "./utils/routes";
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import { useHttpClient } from "./shared/hooks/http-hook";
import { useContext, useEffect } from "react";
import { AuthContext } from "./shared/context/AuthContext";

const App = () => {

  const { sendRequest } = useHttpClient();
  const authCtx = useContext(AuthContext);


  useEffect(() => {
    const sendIsConnected = async () => {
      await sendRequest({
        key: 3,
        url: import.meta.env.VITE_SHINEDERU_API_AUTH_URL,
        method: 'GET',
        body: { action: "me" },
        onSuccess: (data) => {
          authCtx.setAuthData({
            isLoggedIn: true,
            id: data.user.id,
            username: data.user.username,
            email: data.user.email,
            role: data.user.role,
            created_at: data.user.created_at,
          });
          console.log(authCtx);
        },
        onError: () => {
          authCtx.setAuthData({
            isLoggedIn: false,
            id: 0,
            username: '',
            email: '',
            role: '',
            created_at: '',
          });
        },
      });
    };
    sendIsConnected();
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