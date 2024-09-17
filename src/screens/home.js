import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from "./library";
import Feed from "./feed";
import Favorites from "./favorites";
import Trending from "./trending";
import Player from "./player";
import "./home.css";
import Sidebar from "../components/sidebar";

export default function Home() {
   return (
    <Router>
        <div className="main-body">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
        </Routes>
        </div>
    </Router>
   );
}