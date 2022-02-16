import React from "react";
import "./LoginPage.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

function loginPage() {
  return (
    <div className="loginpage">
      <div className="containerLogin">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email<br></br>
            </Form.Label>
            <Form.Control
              className="loginBoxes"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              <br></br>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password<br></br>
            </Form.Label>
            <Form.Control
              className="loginBoxes"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default loginPage;
