import { Route } from "react-router-dom";
import Homepage from "@pages/Homepage.tsx";
import About from "@/pages/About";
import Community from "@/pages/Community";
import Replay from "@/pages/Replay";
import Streaming from "@/pages/Streaming";


const visitorsRoutes = () => (
    <>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/replay" element={<Replay />} />
        <Route path="/streaming" element={<Streaming />} />
    </>
);





export const getRoutes = () => {
    return visitorsRoutes();
}