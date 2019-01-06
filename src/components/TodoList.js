import React, { useContext } from "react";
import TodosContext from "../state/context";
import AddTodoForm from "./AddTodoForm";
import useToggle from "../hooks/useToggle";

//actions
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SET_CURRENT_TODO = "SET_CURRENT_TODO";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodosContext);
  const title = todos.length > 0 ? `${todos.length} Todos` : "no todos!";
  const [show, setShow] = useToggle(false);

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <button
        className="my-3 btn border py-2 px-3 shadow bg-orange-light rounded"
        onClick={() => setShow(true)}
      >
        <img
          src={
            !show
              ? "https://icon.now.sh/plus/006400"
              : "https://icon.now.sh/minus/006400"
          }
          alt="add icon"
          className="h-7"
        />
      </button>
      {show && <AddTodoForm />}
      <ul className="p-0 list-reset text-black">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-orange-light border-white border-dashed shadow-lg border-2 cursor-pointer my-3 py-4 flex items-center todo rounded"
          >
            {/* <span className="text-sm text-grey-dark block flex-2">{todo.created.split(',')[1]}</span> */}
            <span
              className={`flex-1 ml-12 ${todo.complete &&
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
                onClick={() => {
                  dispatch({ type: SET_CURRENT_TODO, todo });
                  setShow(true);
                }}
              />
            </button>
            <button
              onClick={() => {
                dispatch({ type: DELETE_TODO, todo });
              }}
            >
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
