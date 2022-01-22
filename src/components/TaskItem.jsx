import React from "react";
// import { VscCheck } from "react-icons/vsc";
// import {VscChromeClose  } from "react-icons/vsc";

const TaskItem = ({ title, handleToggle, handleDelete, status, id }) => {
  return (
    <>
      <h3 className="title">{title}</h3>
      {/* {
                status ? <VscCheck className="taskitem_btn" onClick={() => handleToggle(id)}/> : <VscChromeClose className="taskitem_btn" onClick={() => handleToggle(id)}/>
            } */}
      <button className="taskitem_btn" onClick={() => handleToggle(id)}>
        {status ? `COMPLETED` : `PENDING`}
      </button>
      <button className="taskitem_btn" onClick={() => handleDelete(id)}>
        DELETE
      </button>
    </>
  );
};

export { TaskItem };
