import React, { useState, useContext } from "react";
import TodosContext from "../state/context";
import { generateTimeStamp } from "../helpers";
import uuidv4 from "uuid/v4";

export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";

const AddTodoForm = () => {
  const { currentTodo = {}, dispatch } = useContext(TodosContext);
  const [todo, setTodo] = useState({
    //tack on 1 in reference to last todo in list
    id: uuidv4(),
    text: "",
    complete: false,
    created: generateTimeStamp()
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      todo
    });
  };

  const handleInput = e => {
    if (!currentTodo.text) {
      return setTodo({ ...todo, text: e.target.value });
    } else {
      setTodo("");
    }
    setTodo({ ...currentTodo, text: e.target.value });
    console.log(todo);
    return dispatch({ type: EDIT_TODO, todo });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h3 className="text-bold text-black mb-2">
        {currentTodo && currentTodo.text ? "Edit Todo" : "Add Todo"}
      </h3>
      <input
        type="text"
        defaultValue={currentTodo && currentTodo.text && currentTodo.text}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
        placeholder="new todo"
        onChange={e => handleInput(e)}
      />
    </form>
  );
};

export default AddTodoForm;
