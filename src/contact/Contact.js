import React from "react";
import "./Contact.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contactTitle">Contact us</h1>
      <div className="container-contact">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
          ></input>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="start-number-control"
            id="exampleFormControlInput1"
            placeholder="+46"
          ></input>
          <input
            type="email"
            className="mobile-control"
            id="exampleFormControlInput1"
            placeholder=""
          ></input>
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="email-control"
            id="exampleFormControlInput1"
            placeholder="Email@address"
          ></input>
        </div>
        <div className="mb-3">
          <textarea
            className="documents"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write here"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Contact;
