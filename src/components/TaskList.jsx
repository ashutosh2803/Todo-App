import React from "react";
import { v4 as uuid } from "uuid";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";
import { ShowCompletedTodos } from "./showCompletedTodos";

const TaskList = () => {
  const [todo, setTodo] = React.useState([]);
  const [completedTodos, setCompletedTodos] = React.useState(todo);
  const [toggleshowTodos, setToggleShowTodos] = React.useState(false);

  const handleTodo = (taskName) => {
    const payload = {
      id: uuid(),
      title: taskName,
      status: false,
      bgcolor: "#FF5C5C"
    };
    setTodo([...todo, payload]);
  };
  const handleToggle = (id) => {
    const data = todo.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status,
            bgcolor: item.bgcolor === "#FF5C5C" ? "#8FF389" : "#FF5C5C"
          }
        : item
    );
    setTodo(data);
  };

  const handleDelete = (id) => {
    const data = todo.filter((item) => item.id !== id);
    todo.map((item) =>
      item.id === id ? window.alert(`${item.title} Deleted!`) : item
    );
    setTodo(data);
  };
  const handleShowCompletedTodos = () => {
    const data = [];
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].status !== false) {
        data.push({ ...todo[i] });
      }
    }
    setCompletedTodos(data);
    const toggle = !toggleshowTodos;
    setToggleShowTodos(toggle);
    console.log(toggleshowTodos);
  };
  return (
    <>
      <TaskInput handleTodo={handleTodo} />
      <ShowCompletedTodos
        handleShowCompletedTodos={handleShowCompletedTodos}
        toggleshowTodos={toggleshowTodos}
      />
      {toggleshowTodos
        ? completedTodos?.map((item) => (
            <div className="w-50 mx-auto my-2" style={{ backgroundColor: item.bgcolor }}>
              <TaskItem
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            </div>
          ))
        : todo?.map((item) => (
            <div
              key={item.id}
              className="w-50 mx-auto my-2"
              style={{ backgroundColor: item.bgcolor }}
            >
              <TaskItem
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            </div>
          ))}
    </>
  );
};
export { TaskList };
