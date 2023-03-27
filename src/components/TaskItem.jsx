import React from "react";
import { Button } from "react-bootstrap";
import { AiOutlineClockCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskItem = ({ title, handleToggle, handleDelete, status, id }) => {
  return (
    <div className="d-flex justify-content-between align-items-center p-1" style={{ boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>
      <div style={{letterSpacing: '0.1ch', fontSize: '20px', fontWeight: '500'}}>{title}</div>
      <div>
        <Button style={{marginRight: '5px'}} className={status ? 'btn btn-success' : 'btn btn-warning'} onClick={() => handleToggle(id)}>
          {status ? <AiOutlineCheckCircle className="fs-1"/> : <AiOutlineClockCircle className="fs-1"/>}
        </Button>
        <Button className="btn btn-danger" style={{marginRight: '1px'}} onClick={() => handleDelete(id)}>
          <MdOutlineDeleteOutline className="fs-1"/>
        </Button>
      </div>
    </div>
  );
};

export { TaskItem };