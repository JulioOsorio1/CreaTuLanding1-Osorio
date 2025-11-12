import React from "react";
import ItemListContainer from "./ItemListContainer.jsx";

function Home({ mensaje }) {
  return (
    <div>
      <h1>Bienvenido a Home</h1>
      {/* Pasamos la prop mensaje al componente ItemListContainer */}
      <ItemListContainer mensaje={mensaje} />
    </div>
  );
}

export default Home;
