import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import "../styles/Register.css";
import validator from "validator";

// const avatars = [
//   "https://reqres.in/img/faces/1-image.jpg",
//   "https://reqres.in/img/faces/2-image.jpg",
//   "https://reqres.in/img/faces/3-image.jpg",
//   "https://reqres.in/img/faces/5-image.jpg",
//   "https://reqres.in/img/faces/7-image.jpg",
//   "https://reqres.in/img/faces/9-image.jpg"
// ]
const Register = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tmpPassword, setTmpPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [valid, setValid] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);
  const [tmpPasswordClicked, setTmpPasswordClicked] = useState(false);
  const [disabledFlag, setDisabledFlag] = useState(true);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    window.alert("Account Created Successfully!");
  };

  useEffect(() => {
    if (password.length > 0) {
      setPasswordClicked(true);
    } else {
      setPasswordClicked(false);
    }
    if (tmpPassword.length > 0) {
      setTmpPasswordClicked(true);
    } else {
      setTmpPasswordClicked(false);
    }
    if (
      password === tmpPassword &&
      first.length > 0 &&
      last.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      tmpPassword.length > 0 &&
      isChecked
    ) {
      setDisabledFlag(false);
    } else {
      setDisabledFlag(true);
    }
  }, [password, tmpPassword, isChecked]);

  console.log("isChecked", isChecked)
  const validate = (value) => {
    setPassword(value);

    if (
      validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        maxLength: 18,
      })
    ) {
      console.log("Is Strong Password");
      setValid(true);
    } else {
      console.log("Is Not Strong Password");
      setValid(false);
    }
  };
  // const avatarHandler = (choice) => {
  //   setAvatar(avatars[choice])
  // }
  return (
    <div style={{ width: "60%" }} className="m-auto my-5">
      <div className="display-1 my-5" style={{textAlign: "center"}}>Register</div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <InputGroup className="mb-3" hasValidation>
          <InputGroup.Text>First and last name</InputGroup.Text>
          <Form.Control
            aria-label="First name"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
          <Form.Control
            aria-label="Last name"
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter Email"
            aria-label="Recipient's email"
            aria-describedby="input-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter New Password"
            aria-label="Recipient's new password"
            aria-describedby="input-2"
            value={password}
            isInvalid={!valid && passwordClicked}
            onChange={(e) => validate(e.target.value)}
          />
        </InputGroup>
        {passwordClicked ? (
          valid ? (
            <Form.Text id="passwordHelpBlock" muted>
              This Password is fine
            </Form.Text>
          ) : (
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          )
        ) : (
          <></>
        )}
        <InputGroup className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm New Password"
            aria-label="Recipient's confirm new password"
            aria-describedby="input-3"
            value={tmpPassword}
            onChange={(e) => setTmpPassword(e.target.value)}
          />
        </InputGroup>
        {tmpPasswordClicked ? (
          password === tmpPassword ? (
            <Form.Text id="passwordHelpBlock" muted>
              Password Matched!
            </Form.Text>
          ) : (
            <Form.Text id="passwordHelpBlock" muted>
              Those passwords not matched. Try again.
            </Form.Text>
          )
        ) : (
          <></>
        )}
        {/* <div className="d-flex flex-wrap justify-content-around customBorder">
              {avatars.map((ele, i) => <img key={i} style={{cursor: "pointer"}} onClick={() => avatarHandler(i - 1)} src={ele} alt="avatar" />)}
          </div> */}
        <div key="termsConditions" className="mb-3">
          <Form.Check // prettier-ignore
            type="checkbox"
            id="termsConditions"
            label="Click here to agree to the Terms & Conditions"
            checked={isChecked}
            onChange={e => setIsChecked(e.target.checked)}
          />
        </div>
        <button
          disabled={disabledFlag}
          type="submit"
          className="btn btn-primary my-3"
        >
          Create New Account
        </button>
      </Form>
      <button className="btn btn-success my-3">
        Already Registered? Login !
      </button>
    </div>
  );
};

export default Register;
