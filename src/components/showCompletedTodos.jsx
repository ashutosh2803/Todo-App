import React from "react";
import { Button } from "react-bootstrap";

const ShowCompletedTodos = ({ handleShowCompletedTodos, toggleshowTodos, togglePendingTodos }) => {
  const text = toggleshowTodos ? `ALL` : togglePendingTodos ? `PENDING` : `COMPLETED`;
  const custom_className = toggleshowTodos ? "m-3 btn btn-primary" : "m-3 btn btn-warning"
  return (
    <Button className={custom_className} onClick={handleShowCompletedTodos}>
      {text}
    </Button>
  );
};
export { ShowCompletedTodos };
