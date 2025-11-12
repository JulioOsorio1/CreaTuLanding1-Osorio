import React from "react";
import "./App.css";
import "./styles/home.css";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Animales from "./components/Animales.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Contacto from "./components/Contacto.jsx";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const mensaje = "Hola, bienvenido !";
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home mensaje={mensaje} />} />
        <Route path="/Animales" element={<Animales />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
