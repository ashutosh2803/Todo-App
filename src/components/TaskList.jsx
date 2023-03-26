import React from "react";
import { v4 as uuid } from "uuid";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";
import { ShowCompletedTodos } from "./showCompletedTodos";
import { Button } from "react-bootstrap";

const TaskList = () => {
  const [todo, setTodo] = React.useState(() => {
    // getting stored value
    console.log('local storage called');
    const saved = localStorage.getItem('todo');
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  const [completedTodos, setCompletedTodos] = React.useState(() => {
    // getting stored value
    console.log('local storage called');
    const saved = localStorage.getItem('completed_todos');
    const initialValue = JSON.parse(saved);
    return initialValue || todo;
  });
  const [toggleshowTodos, setToggleShowTodos] = React.useState(false);

  React.useEffect(() => {
    console.log('local storage updated');
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('completed_todos', JSON.stringify(completedTodos));
  }, [todo, completedTodos]);
  
  const handleTodo = (taskName) => {
    const payload = {
      id: uuid(),
      title: taskName,
      status: false,
      bgcolor: "#FF5C5C"
    };
    setTodo([...todo, payload]);
    setToggleShowTodos(false);
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
    setToggleShowTodos(false);
  };
  const deleteAll = () => {
    setTodo([]);
    window.alert('All Tasks Deleted!');
    setToggleShowTodos(false);
  }
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
      {todo.length > 0 ? (
        <>
          <div className="d-flex justify-content-between align-items-center mx-3">
            <div className="display-6">Tasks</div>
            <Button className="btn btn-danger" onClick={deleteAll}>Delete All</Button>
          </div>
          <hr className="mx-3"/>
        </>
      ) : null}
      {toggleshowTodos
        ? completedTodos?.map((item) => (
            <div className="w-100 mx-auto my-2" style={{ backgroundColor: item.bgcolor }}>
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
              className="w-96 my-2 mx-2"
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