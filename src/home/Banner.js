import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const history = useNavigate();
  return (
    <div className="banner">
      <div class="containerslogan">
        "
        <h1 class="slogan">
          Let us guide <br></br>you home.
        </h1>
      </div>
      <button onClick={() => history("/listings")} class="bannerbutton">
        Get started
      </button>
    </div>
  );
}

export default Banner;
