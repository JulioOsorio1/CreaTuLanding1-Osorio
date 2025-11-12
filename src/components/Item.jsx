import React from "react";
import Animales from "./Animales";

const Item = (Animales) => {
  return (
    <div className="card">
      <img className="card-img-top" src="" alt="" />
      <div>
        <h3 className="card-tittle"></h3>
        <p className="card-text"></p>
        <a href="" className="btn-link">
          Ver más
        </a>
      </div>
    </div>
  );
};

export default Item;
