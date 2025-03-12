import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../pages/Home.jsx";
import Country from "../pages/Country.jsx";
import Europe from "../pages/Europe.jsx";
import CurrencyCountryList from "../pages/CurrencyCountryList.jsx";
import Nav from "../pages/Nav";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Nav>

      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<Country />} />
        <Route path="/country/:name" element={<CurrencyCountryList />} />

        <Route path="/europe" element={<Europe />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
