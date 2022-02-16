import React from "react";
import "./Card.css";

function Card({ src, title, description, startingPrice, location }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="description">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{startingPrice}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default Card;
