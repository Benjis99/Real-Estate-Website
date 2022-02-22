import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
></link>;

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
