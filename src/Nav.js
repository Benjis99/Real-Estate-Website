import React from "react";
import "./Nav.css";
import { Button } from "@mui/material";

function Nav() {
  return (
    <div className="nav">
      <div className="navigation">
        <div className="test">
          <Button variant="outlined">Home</Button>
          <Button variant="outlined">Listings</Button>
          <Button variant="outlined">Services</Button>
          <Button variant="outlined">About us</Button>
          <Button variant="outlined">Blog</Button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
