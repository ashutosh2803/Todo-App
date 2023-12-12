import React from "react";
import { Form, InputGroup } from "react-bootstrap";

const Register = () => {
  return (
    <div style={{width: "60%"}} className="m-auto my-5">
      <div className="display-1 my-5">Register</div>
      <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" />
        <Form.Control aria-label="Last name" />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Email"
          aria-label="Recipient's email"
          aria-describedby="input-1"
        />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter New Password"
          aria-label="Recipient's new password"
          aria-describedby="input-2"
        />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="Confirm New Password"
          aria-label="Recipient's confirm new password"
          aria-describedby="input-3"
        />
          </InputGroup>
          <div className="d-flex flex-wrap justify-content-around">
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/1-image.jpg" alt="avatar" />
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/2-image.jpg" alt="avatar" />
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/3-image.jpg" alt="avatar" />
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/5-image.jpg" alt="avatar" />
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/7-image.jpg" alt="avatar" />
              <img style={{cursor: "pointer"}} src="https://reqres.in/img/faces/9-image.jpg" alt="avatar" />
          </div>
          <div className="d-flex flex-wrap justify-content-center flex-column">
              <button type="submit" className="btn btn-primary my-3">Create New Account</button>
              <div className="text-20 text-weight-bolder" style={{cursor: "pointer"}}>Already Registered? Login !</div>
          </div>
    </div>
  );
};

export default Register;
