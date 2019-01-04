import React, { useContext } from "react";
import TodosContext from "../state/context";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  console.log(todos);
  return (
    <div>
      <h1 className="font-bold">Todo List</h1>
      <ul className="m-2 p-2">
        {todos.map(({ text, id }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
