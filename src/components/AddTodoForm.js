import React, { useState, useContext } from "react";
import TodosContext from "../state/context";
export const ADD_TODO = "ADD_TODO";

const AddTodoForm = () => {
  const { todos, dispatch } = useContext(TodosContext);
  const [todo, setTodo] = useState({
    //tack on 1 in reference to last todo in list
    id: todos.indexOf(todos[todos.length - 1]) + 2,
    text: "",
    complete: false
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      todo
    });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h3 className="text-bold text-white">Add Todo</h3>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        placeholder="new todo"
        onChange={e => setTodo({ ...todo, text: e.target.value })}
      />
    </form>
  );
};

export default AddTodoForm;
