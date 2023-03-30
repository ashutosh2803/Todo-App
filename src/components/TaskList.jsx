import React from "react";
import { v4 as uuid } from "uuid";
import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";
import OptionsWrapper from "./OptionsWrapper";
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
  const [pendingTodos, setPendingTodos] = React.useState(() => {
    // getting stored value
    console.log('local storage called');
    const saved = localStorage.getItem('pending_todos');
    const initialValue = JSON.parse(saved);
    return initialValue || todo;
  });
    const [option, setOption] = React.useState(3);

  React.useEffect(() => {
      console.log('local storage updated');
    localStorage.setItem('todo', JSON.stringify(todo));
    localStorage.setItem('completed_todos', JSON.stringify(completedTodos));
    localStorage.setItem('pending_todos', JSON.stringify(pendingTodos));
  }, [todo, completedTodos, pendingTodos]);
  
  const handleTodo = (taskName) => {
    if (taskName === '') {
      window.alert('Please enter a task!');
      return;
    }
    taskName = taskName[0].toUpperCase() + taskName.slice(1);
    const payload = {
      id: uuid(),
      title: taskName,
      status: false,
      bgcolor: "#FF5C5C"
    };
    setTodo([...todo, payload]);
    setOption(3);
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
    const handleOption = (option) => {
        if (option === 1) {
          setOption(1);
          handleShowPendingTodos();
        } else if (option === 2) {
          setOption(2);
          handleShowCompletedTodos();
        } else {
            setOption(3);
        }
    }
  const handleDelete = (id) => {
    const data = todo.filter((item) => item.id !== id);
    todo.map((item) =>
      item.id === id ? window.alert(`${item.title} Deleted!`) : item
    );
    setTodo(data);
    };
    const deleteAll = () => {
        setTodo([]);
        window.alert('All Tasks Deleted!');
        setOption(3);
      }
    const handleShowPendingTodos = () => {
        const data = [];
        for (let i = 0; i < todo.length; i++) {
          if (todo[i].status === false) {
            data.push({ ...todo[i] });
          }
        }
        setPendingTodos(data);
    }
    const handleShowCompletedTodos = () => {
        const data = [];
        for (let i = 0; i < todo.length; i++) {
          if (todo[i].status !== false) {
            data.push({ ...todo[i] });
          }
        }
        setCompletedTodos(data);
      };
  return (
    <>
      <TaskInput handleTodo={handleTodo} />
          <OptionsWrapper handleOption={handleOption} />
          {todo.length > 0 ? (
        <>
          <div className="d-flex justify-content-between align-items-center mx-3">
            <div className="display-6" style={{letterSpacing: '0.1ch'}}>Tasks</div>
            <Button className="btn btn-danger" onClick={deleteAll}>Delete All</Button>
          </div>
          <hr className="mx-3"/>
        </>
      ) : null}
      {option === 1
        ? pendingTodos?.map((item) => (
            <div className="w-96 mx-2 my-2" style={{ backgroundColor: item.bgcolor }}>
              <TaskItem
                key={item.id}
                {...item}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
              />
            </div>
          ))
        : option === 2 ? completedTodos?.map((item) => (
            <div className="w-96 mx-2 my-2" style={{ backgroundColor: item.bgcolor }}>
              <TaskItem
                key={item.id}
                {...item}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
              />
            </div>))
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
