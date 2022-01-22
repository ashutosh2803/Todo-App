import React from "react";
import { Button } from "react-bootstrap";

const ShowCompletedTodos = ({ handleShowCompletedTodos, toggleshowTodos }) => {
  return (
    <Button className="completedTodos m-3 btn btn-warning" onClick={handleShowCompletedTodos}>
      {toggleshowTodos ? `SHOW ALL` : `SHOW COMPLETED`}
    </Button>
  );
};
export { ShowCompletedTodos };
