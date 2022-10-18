import React, { useState } from "react";
import { TiHeart } from "react-icons/ti";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input placeholder="뭐하지 ?" value={value} onChange={onChange}></input>
        <button type="submit">
          <TiHeart />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;
