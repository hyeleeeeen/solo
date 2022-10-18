import React, { useState } from "react";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import "./App.css";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";

let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: true,
    },
    {
      id: 2,
      text: "할일2",
      checked: false,
    },
  ]);

  let onInsertToggle = () => {
    setInsertToggle(!insertToggle);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("아무것도 안하게 ?");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </Template>
  );
}

export default App;
