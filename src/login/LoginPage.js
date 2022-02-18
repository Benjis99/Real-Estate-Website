import React from "react";
import "./LoginPage.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function loginPage() {
  return (
    <div className="loginpage">
      <div className="signInContainer">
        <div className="signInHeader">
          <h1 className="h1LoginPage">SIGN IN</h1>
        </div>
      </div>
      <div className="containerLogin">
        <div className="loginPageContainer">
          <div className="loginPageForm">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  <p className="loginPageFontStyle">Email</p>
                </Form.Label>
                <Form.Control className="loginBoxes" type="email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <span className="loginPageFontStyle">Password</span>
                  <span className="loginPageForgotPassword">
                    <a href="#">Forgot password?</a>
                  </span>
                </Form.Label>
                <Form.Control className="loginBoxes" type="password" />
              </Form.Group>
              <Button
                className="loginPageButton"
                variant="primary"
                type="submit"
              >
                <p className="LoginButtonText">LOGIN</p>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
