import React from "react";
import { Button } from "react-bootstrap";

const ShowCompletedTodos = ({ handleShowCompletedTodos, toggleshowTodos }) => {
  const text = toggleshowTodos ? `SHOW ALL` : `SHOW COMPLETED`;
  const custom_className = toggleshowTodos ? "completedTodos m-3 btn btn-primary" : "completedTodos m-3 btn btn-warning"
  return (
    <Button className={custom_className} onClick={handleShowCompletedTodos}>
      {text}
    </Button>
  );
};
export { ShowCompletedTodos };
