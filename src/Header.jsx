import React from "react";
import "./Header.css";

const Header = ({ todos }) => {
  return (
    <div>
      <h1>Hello todo App</h1>
      <div className="countInfo">해야할 일! {todos.length} 개가 있습니다.</div>
    </div>
  );
};

export default Header;
