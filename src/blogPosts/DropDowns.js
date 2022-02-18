import React, { Fragment } from "react";
import "./DropDowns.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";

function DropDown() {
  return (
    <div className="dropDown">
      <div class="select-dropdown">
        <select>
          <option value="Option 1">Date</option>

          <option value="Option 2">Review</option>
        </select>
      </div>
    </div>
  );
}

export default DropDown;
