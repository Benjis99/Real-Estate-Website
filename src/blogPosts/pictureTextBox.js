import React from "react";
import "./pictureTextBox.css";

function pictureTextBox({ src, date, title, description, secondDescription }) {
  return (
    <div className="pictureTextBox">
      <img src={src} alt="" />
      <div className="fgh">
        <h2 className="dateText">{date}</h2>
        <p className="titleTextPosts">{title}</p>
        <p className="descText">{description}</p>
        <p className="secDescText">{secondDescription}</p>
      </div>
    </div>
  );
}

export default pictureTextBox;
