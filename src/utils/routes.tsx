import AboutMe from "@/pages/AboutMe";
import Channels from "@/pages/Channels";
import Community from "@/pages/Community";
import Dashboard from "@/pages/Dashboard";
import Homepage from "@/pages/Homepage";
import NewsManager from "@/pages/NewsManager";
import Profile from "@/pages/Profile";
import UserManager from "@/pages/UserManager";
import { Navigate, Route } from "react-router-dom";


//Routes autorisées pour les anonymes
const anonymous = () => (
    <>
        <Route path="*" element={<Navigate to="/" replace />} /> {/*Redirection pour les routes non-autorisées & inconnue */}
        <Route path="/" element={<Homepage />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/community" element={<Community />} />
        <Route path="/aboutme" element={<AboutMe />} />
    </>
)


const logged = () => (
    <>
        {anonymous()}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />

    </>
)

const admin = () => (
    <>
        {logged()}
        <Route path="/UserManager" element={<UserManager />} />
        <Route path="/NewsManager" element={<NewsManager />} />

    </>
)

export const getRoutes = (permission: number) => {
    switch (permission) {
        case 2: //Cas Administrateur
            return admin();
        case 1: //Cas utilisateur
            return logged();
        default: //Cas visiteur
            return anonymous();
    }


    return anonymous();
};