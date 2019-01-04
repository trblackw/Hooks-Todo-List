import React, { useContext } from "react";
import TodosContext from "../state/context";
export const TOGGLE_TODO = "TOGGLE_TODO";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodosContext);
  const title = todos.length > 0 ? `${todos.length} Todos` : "no todos!";

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="p-0 list-reset text-white">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-orange-dark border-black border-dashed border-2 my-2 py-4 flex items-center"
          >
            <span
              className={`cursor-pointer flex-1 ml-12 ${todo.complete &&
                "line-through text-grey-darkest"}`}
              onDoubleClick={() => dispatch({ type: TOGGLE_TODO, todo })}
            >
              {todo.text}
            </span>
            <button>
              <img
                src="https://icon.now.sh/edit/0050c5"
                alt="edit icon"
                className="h-6"
              />
            </button>
            <button>
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="delete icon"
                className="h-6"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
