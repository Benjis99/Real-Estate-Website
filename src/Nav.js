import React from "react";
import "./Nav.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
  const history = useNavigate();
  return (
    <div className="nav">
      <div className="navigation">
        <div className="test">
          <Button
            className="none"
            onClick={() => history("/")}
            variant="outlined"
          >
            Home
          </Button>

          <Button onClick={() => history("/listings")} variant="outlined">
            Listings
          </Button>
          <Button onClick={() => history("/services")} variant="outlined">
            Services
          </Button>
          <Button onClick={() => history("/about")} variant="outlined">
            About us
          </Button>
          <Button onClick={() => history("/blog")} variant="outlined">
            Blog
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
