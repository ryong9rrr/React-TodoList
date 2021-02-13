import React, { Component, useState, useEffect } from "react";
import "./App.css";
import List from "./List.jsx";

const App = () => {
  const [todos, setTodos] = useState(["js 공부"]);
  const [newTodo, setNewTodo] = useState();

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <h1>To-do App</h1>

      <form>
        <input type="text" onChange={changeInputData} />
        <button class="btn" onClick={addTodo}>
          할 일 추가
        </button>
      </form>

      <List todos={todos} />
    </div>
  );
};

export default App;
