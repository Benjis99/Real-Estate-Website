import React from "react";
import "./About.css";
import AboutBanner from "./AboutBanner";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

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
    </div>
  );
}

export default About;
