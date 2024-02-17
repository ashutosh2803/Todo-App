import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "../styles/Register.css";

const avatars = [
  "https://reqres.in/img/faces/1-image.jpg",
  "https://reqres.in/img/faces/2-image.jpg",
  "https://reqres.in/img/faces/3-image.jpg",
  "https://reqres.in/img/faces/5-image.jpg",
  "https://reqres.in/img/faces/7-image.jpg",
  "https://reqres.in/img/faces/9-image.jpg"
]
const Register = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tmpPassword, setTmpPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
  }, [])
  const avatarHandler = (choice) => {
    setAvatar(avatars[choice])
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      first, last, password, avatar
    }
    console.log("payload", payload);
  }
  return (
    <div style={{width: "60%"}} className="m-auto my-5">
      <div className="display-1 my-5">Register</div>
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
        <InputGroup.Text>First and last name</InputGroup.Text>
        <Form.Control aria-label="First name" value={first} onChange={e => setFirst(e.target.value)}/>
        <Form.Control aria-label="Last name" value={last} onChange={e => setLast(e.target.value)} />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Email"
          aria-label="Recipient's email"
          aria-describedby="input-1"
          value={email}
          onChange={e => setEmail(e.target.value)}  
        />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter New Password"
          aria-label="Recipient's new password"
          aria-describedby="input-2"
          value={password}
          onChange={e => setPassword(e.target.value)}  
        />
          </InputGroup>
          <InputGroup className="mb-3">
        <Form.Control
          type="password"
          placeholder="Confirm New Password"
          aria-label="Recipient's confirm new password"
          aria-describedby="input-3"
          value={tmpPassword}
          onChange={e => setTmpPassword(e.target.value)}  
        />
          </InputGroup>
          <div className="d-flex flex-wrap justify-content-around customBorder">
              {avatars.map((ele, i) => <img key={i} style={{cursor: "pointer"}} onClick={() => avatarHandler(i - 1)} src={ele} alt="avatar" />)}
          </div>
          <button type="submit" className="btn btn-primary my-3">Create New Account</button>
        </Form>
          <button className="btn btn-success my-3">Already Registered? Login !</button>
    </div>
  );
};

export default Register;
