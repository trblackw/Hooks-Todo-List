import React, { useState } from "react";
import styled from "styled-components";

const Todo = ({ todo, index, remove, complete }) => {
  return (
    <li
      className="todo"
      key={index}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text}</p>
      <div className="button-group">
        <Button color="#209cee">edit</Button>
        <Button color="lightblue" onClick={() => complete(index)}>
          complete
        </Button>
        <Button color="red" onClick={() => remove(todo)}>
          delete
        </Button>
      </div>
    </li>
  );
};

export default Todo;

const Button = styled.button`
  border: none;
  border-radius: 4px;
  background: ${props => props.color};
  color: whitesmoke;
  &:hover {
    cursor: pointer;
  }
`;
