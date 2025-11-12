import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import CardWidget from "./CardWidget"; // Asegúrate de usar el nombre correcto

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Logo de la tienda */}
      <div className="navbar-logo">
        <img src="/Logo.png" alt="Logo" />
      </div>

      {/* Enlaces de navegación */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Animales">Animales</Link>
        </li>
        <li>
          <Link to="/Nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/Contacto">Contacto</Link>
        </li>
        <li>
          <CardWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
