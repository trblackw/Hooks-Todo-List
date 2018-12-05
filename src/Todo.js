import React from "react";
import styled from "styled-components";
import { useToggle } from "./customHooks/useToggle";

const Todo = ({ todo, index, remove, complete, edit }) => {
  const [open, toggle] = useToggle(false);
  return (
    <li
      className="todo"
      key={index}
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <p>{todo.text}</p>
      {open && <input type="text" value={todo.text} />}
      <div className="button-group">
        <Button color="#209cee" onClick={() => toggle()}>
          edit
        </Button>
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
