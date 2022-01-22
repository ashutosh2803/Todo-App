import React from "react";
import { Button } from "react-bootstrap";

const TaskItem = ({ title, handleToggle, handleDelete, status, id }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div className="display-6 text-white">{title}</div>
      <div>
        <Button className={status ? 'btn btn-success mx-2' : 'btn btn-warning mx-2'} onClick={() => handleToggle(id)}>
          {status ? `COMPLETED` : `PENDING`}
        </Button>
        <Button className="btn btn-danger mx-2" onClick={() => handleDelete(id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export { TaskItem };
