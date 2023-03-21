import React from "react";
import { Button } from "react-bootstrap";

const ShowPendingTodos = ({ handleShowPendingTodos, toggleshowTodos }) => {
  return (
    <Button className="pendingTodos m-3 btn btn-danger" onClick={handleShowPendingTodos}>
      {toggleshowTodos ? `SHOW ALL` : `SHOW PENDING`}
    </Button>
  );
};
export { ShowPendingTodos };
