import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home.jsx";
import Country from "../pages/Country.jsx";
import Europe from "../pages/Europe.jsx";
import CurrencyCountryList from "../pages/CurrencyCountryList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <span>
          <li>
            <Link to="/">Home</Link>
          </li>
        </span>
        <li>
          <Link to="/europe">Europe</Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/country/:name" element={<CurrencyCountryList />} />

        <Route path="/europe" element={<Europe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
