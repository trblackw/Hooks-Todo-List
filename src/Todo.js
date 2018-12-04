import React, { useState } from "react";
import styled from "styled-components";

const Todo = ({ todo, index }) => {
  return (
    <li className="todo" key={index}>
      <p>{todo.text}</p>
      <div className="button-group">
        <Button color="#209cee">edit</Button>
        <Button color="red">delete</Button>
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
    border: 1px solid red;
  }
`;
