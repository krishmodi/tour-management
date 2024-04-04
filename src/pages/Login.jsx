import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

import "../styles/login.css"

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic goes here
  };

  return (
    <div className="login-page">
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <div className="login-form">
              {/* <div className="logo">
                <img src={logo} alt="Logo" />
              </div> */}
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Enter your password" required />
                </FormGroup>
                <Button color="primary" type="submit" block>Login</Button>
              </Form>
              <div className="mt-3 text-center">
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
