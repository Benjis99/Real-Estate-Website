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
            <p className="nav-text">Home</p>
          </Button>

          <Button onClick={() => history("/listings")} variant="outlined">
            <p className="nav-text">Listings</p>
          </Button>
          <Button onClick={() => history("/ourServices")} variant="outlined">
            <p className="nav-text">Services</p>
          </Button>
          <Button onClick={() => history("/about")} variant="outlined">
            <p className="nav-text">About us</p>
          </Button>
          <Button onClick={() => history("/blog")} variant="outlined">
            <p className="nav-text">Blog</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
