import React from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contactTitle">Contact us</h1>
      <div className="container-contact">
        <div className="firstName">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
          ></input>
        </div>
        <div className="secondName">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          ></input>
        </div>

        <div className="mailAddress">
          <input
            type="email"
            className="email-control"
            id="exampleFormControlInput1"
            placeholder="Email@address"
          ></input>
        </div>
        <div className="emailBox">
          <input
            type="email"
            className="start-number-control"
            id="exampleFormControlInput1"
            placeholder="+46"
          ></input>
        </div>
        <div className="emailStart">
          <input
            type="email"
            className="mobile-control"
            id="exampleFormControlInput1"
            placeholder=""
          ></input>
        </div>

        <div className="docBox">
          <textarea
            className="documents"
            rows="3"
            placeholder="Write here"
          ></textarea>
        </div>
        <Button className="btn-send">Send</Button>
      </div>
    </div>
  );
}

export default Contact;
