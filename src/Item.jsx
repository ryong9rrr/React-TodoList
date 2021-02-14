import React from "react";

const Item = ({ todo, changeTodoStatus }) => {
  const toggleItem = (e) => {
    const id = e.target.dataset.id;
    changeTodoStatus(id);
  };
  return (
    <li data-id={todo.id} onClick={toggleItem}>
      {todo.title}
    </li>
  );
};
export default Item;
