import React from "react";
import "./Header.css";
import Loggo from "./pictures/log.png";
import SearchIcon from "@mui/icons-material/Search";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LoginIcon from "@mui/icons-material/Login";
import { Button } from "@mui/material";
import { Route, BrowserRouter as Router } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img className="loggo" src={Loggo}></img>

      <div className="searchBar">
        <input type="text" placeholder="Search"></input>
        <SearchIcon />
      </div>

      <div className="icons">
        <Button className="icon-btn">
          <ContactPageIcon /> <h4 className="iconText">Contact us</h4>
        </Button>
        <Button className="icon-btn">
          <LoginIcon /> <h4 className="iconText">Login</h4>
        </Button>
      </div>
    </div>
  );
}

export default Header;
