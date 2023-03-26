import React from "react";
import { Button } from "react-bootstrap";

const TaskItem = ({ title, handleToggle, handleDelete, status, id }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <div style={{letterSpacing: '0.1ch', fontSize: '20px', fontWeight: '500'}}>{title}</div>
      <div>
        <Button className={status ? 'btn btn-success mx-1' : 'btn btn-warning mx-1'} onClick={() => handleToggle(id)}>
          {status ? `COMPLETED` : `PENDING`}
        </Button>
        <Button className="btn btn-danger mx-1" onClick={() => handleDelete(id)}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export { TaskItem };