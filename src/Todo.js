import React, { useState } from "react";
import styled from "styled-components";
import { useToggle } from "./customHooks/useToggle";

const Todo = ({ todo, index, remove, complete, edit }) => {
  const [open, toggle] = useToggle(false);
  const [value, setValue] = useState(todo.text);

  const handleBlur = () => {
    edit(index, value);
    toggle();
  };

  return (
    <li key={index} className="todo">
      {!open ? (
        <p className={todo.isCompleted ? "strike" : ""}>{todo.text}</p>
      ) : (
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={handleBlur}
        />
      )}

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
  margin: 0 0.5em;
  color: whitesmoke;
  &:hover {
    cursor: pointer;
  }
`;
