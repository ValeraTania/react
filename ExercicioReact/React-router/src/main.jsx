import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home.jsx";
import Continents from "../pages/Continents.jsx";
import Country from "../pages/Country.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <span>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </span>
        <li>
        <Link to='/continents'>Continents</Link>
        </li>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/country/:name' element={<Country/>}/>
        <Route path="/continents" element={<Continents />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
