import React, { useState, useEffect } from "react";
import "./App.css";
import List from "./List.jsx";
import useFetch from "./useFetch.js";
import Header from "./Header.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: newTodo, id: todos.length, status: "todo" }]);
  };

  const changeTodoStatus = (id) => {
    debugger;
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });
    console.log(updateTodos);
  };

  useEffect(() => {
    console.log("새로운 내용이 렌더링 됐네요", todos);
  }, [todos]);

  return (
    <div>
      <Header todos={todos}></Header>

      <form>
        <input type="text" onChange={changeInputData} />
        <button onClick={addTodo}>할 일 추가</button>
      </form>

      <List
        todos={todos}
        loading={loading}
        changeTodoStatus={changeTodoStatus}
      />
    </div>
  );
};

export default App;
