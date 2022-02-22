import React from "react";
import "./Contact.css";
import { Button } from "react-bootstrap";
import ContactBanner from "./ContactBanner";

function Contact() {
  return (
    <div className="contact">
      <ContactBanner />
      <section className="entire-container">
        <div className="information-contact">
          <h2 className="title-contact">Lorem Ipsum</h2>
          <p className="body-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

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
          <Button className="btn-send">
            <h2 className="send-btn">Send</h2>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default Contact;
