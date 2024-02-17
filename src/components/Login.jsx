import React, {useContext} from "react";
import { Form, InputGroup } from "react-bootstrap";
import { AuthContextProvider } from "../context/AuthContextProvider";

const Login = () => {
    const { users } = useContext(AuthContextProvider);
    console.log("users", users);
  return (
    <div className="w-50 m-auto my-5">
      <div className="display-1 my-5">Login</div>
      <Form>
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
            placeholder="Enter Password"
            aria-label="Recipient's password"
            aria-describedby="input-2"
          />
            </InputGroup>
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
      <button className="btn btn-info my-3" >Click here to Register</button>
    </div>
  );
};

export default Login;
