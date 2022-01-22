import React from "react";

const ShowCompletedTodos = ({ handleShowCompletedTodos, toggleshowTodos }) => {
  return (
    <button className="completedTodos" onClick={handleShowCompletedTodos}>
      {toggleshowTodos ? `SHOW ALL` : `SHOW COMPLETED TO-DOS`}
    </button>
  );
};
export { ShowCompletedTodos };
