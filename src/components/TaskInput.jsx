import React from "react";
import { VscAdd } from "react-icons/vsc";

const TaskInput = ({ handleTodo }) => {
  const [taskName, setTaskName] = React.useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskName(value);
  };
  return (
    <>
      <input
        placeholder="Add a to-do..."
        onChange={handleChange}
        value={taskName}
        className="input_box"
      />
      <VscAdd className="add_btn" onClick={() => handleTodo(taskName)}></VscAdd>
    </>
  );
};
export { TaskInput };
