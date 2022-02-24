import React from "react";
import "./About.css";
import AboutBanner from "./AboutBanner";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import MiddleBanner from "./MiddleBanner";

function About() {
  return (
    <div className="about">
      <AboutBanner />
      <Container>
        <Row className="who-row">
          <Col className="col">
            <h1 className="who-title">Who are we?</h1>
            <p className="who-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. At in
              tellus integer feugiat scelerisque varius. Scelerisque felis
              imperdiet proin fermentum leo vel. Morbi non arcu risus quis
              varius. Et tortor consequat id porta nibh venenatis cras. Tortor
              pretium viverra suspendisse potenti. Placerat orci nulla
              pellentesque dignissim enim sit amet venenatis urna. Eu ultrices
              vitae auctor eu. Commodo nulla facilisi nullam vehicula ipsum a
              arcu cursus. Nullam ac tortor vitae purus
            </p>
          </Col>
        </Row>
      </Container>

      <MiddleBanner />

      <section className="first-section-box">
        <div className="left-txt-box">
          <h1 className="box-title-offer">What do we offer?</h1>
          <p className="box-line">━━━━━━━━━━━━━━━━━━━━━</p>
          <p className="orange-txt-offer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="txt-offer">
            At in tellus integer feugiat scelerisque varius. Scelerisque felis
            imperdiet proin fermentum leo vel. Morbi non arcu risus quis varius.
            Et tortor consequat id porta nibh venenatis cras. Tortor pretium
            viverra suspendisse potenti. Placerat orci nulla pellentesque
            dignissim enim sit amet venenatis urna. Eu ultrices vitae auctor eu.
            Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nullam
            ac tortor vitae purus.{" "}
          </p>
        </div>

        <div className="right-txt-box"></div>
      </section>

      <section className="second-section-box">
        <div className="left-txt-box-under"></div>

        <div className="right-txt-box-under">
          <h1 className="box-title-offer">Why real estate?</h1>
          <p className="box-line">━━━━━━━━━━━━━━━━━━━━━</p>
          <p className="orange-txt-offer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="txt-offer">
            At in tellus integer feugiat scelerisque varius. Scelerisque felis
            imperdiet proin fermentum leo vel. Morbi non arcu risus quis varius.
            Et tortor consequat id porta nibh venenatis cras. Tortor pretium
            viverra suspendisse potenti. Placerat orci nulla pellentesque
            dignissim enim sit amet venenatis urna. Eu ultrices vitae auctor eu.
            Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Nullam
            ac tortor vitae purus.{" "}
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
