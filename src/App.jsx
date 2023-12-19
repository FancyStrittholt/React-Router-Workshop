import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Purple from "./components/Purple";
import Pink from "./components/Pink";
import Black from "./components/Black";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <div id="container">
                <Navbar />
                <div id="main-section">
                    {
                        <Routes>
                            <Route path="/home" element={<Home />}></Route>
                            <Route path="/blue" element={<Blue />}></Route>
                            <Route path="/red" element={<Red />}></Route>
                            <Route path="/purple" element={<Purple />}></Route>
                            <Route path="/black" element={<Black />}></Route>
                            <Route path="/pink" element={<Pink />}></Route>
                        </Routes>
                    }
                </div>
                <Footer />
            </div>
        </>
    );
}
