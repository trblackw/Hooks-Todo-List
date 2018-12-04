import React, { useState } from "react";

const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>;
};

export default Todo;
