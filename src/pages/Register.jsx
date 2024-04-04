import React from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import {User} from "./models/User.js";
import "../styles/register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your registration logic goes here
  };

  return (
    <div className="register-page">
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <div className="register-form">
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Enter your name" required />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Enter your email" required />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="Enter your password" required />
                </FormGroup>
                <Button color="primary" type="submit" block>Register</Button>
              </Form>
              <div className="mt-3 text-center">
                <p>Already have an account? <Link to="/login">Login here</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
