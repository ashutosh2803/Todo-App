import React from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { VscAdd } from "react-icons/vsc";

const TaskInput = ({ handleTodo }) => {
  const [taskName, setTaskName] = React.useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTaskName(value);
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
      <InputGroup size="lg" className="w-50">
        <FormControl
          placeholder="Add a to-do..."
          onChange={handleChange}
          value={taskName}
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <Button onClick={() => { handleTodo(taskName); setTaskName("")}} className="btn btn-light"><VscAdd className="display-6 px-2 cursor-pointer"></VscAdd></Button>
    </div>
  );
};
export { TaskInput };
