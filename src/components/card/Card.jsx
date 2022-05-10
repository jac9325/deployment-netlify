import React from "react";
import "./card.css";
const Card = ({ id, title, url }) => {
  return (
    <div className="contenedor">
      <img src={url} alt="imagen-responsive" />
      <h3>{title}</h3>
      <p>
        Lorem Ipsum es simplemente el texto relleno de las imprentas y archivos
        de texto. Lorem Ipsum ha sido el texto de relleno estándar de las
        industrias desde el año 1500
      </p>
    </div>
  );
};

export default Card;
