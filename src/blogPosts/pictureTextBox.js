import React from "react";
import "./pictureTextBox.css";

function pictureTextBox({
  src,
  date,
  title,
  line,
  description,
  secondDescription,
  auth,
}) {
  return (
    <div className="pictureTextBox">
      <img src={src} alt="" />
      <div className="descBox">
        <h2 className="dateText">{date}</h2>
        <p className="titleTextPosts">{title}</p>
        <p className="lineText">{line}</p>
        <p className="descText">{description}</p>
        <p className="secDescText">{secondDescription}</p>
        <p className="authText">{auth}</p>
      </div>
    </div>
  );
}

export default pictureTextBox;
