import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const history = useNavigate();
  return (
    <div className="animate__animated animate__fadeInDown">
      <div class="containerSlogan">
        <h1 class="animate__animated animate__slideInLeft">
          Let us guide <br></br>you home.
        </h1>
      </div>
      <button onClick={() => history("/listings")} class="bannerButton">
        Get started
      </button>
    </div>
  );
}

export default Banner;
