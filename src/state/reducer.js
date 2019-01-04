import {
  TOGGLE_TODO,
  DELETE_TODO,
  SET_CURRENT_TODO
} from "../components/TodoList";
import { ADD_TODO } from "../components/AddTodoForm";

const TodosReducer = (state = {}, action) => {
  const { type, todo: selectedTodo } = action;
  const { todos } = state;
  switch (type) {
    case SET_CURRENT_TODO:
      return {
        ...state,
        currentTodo: selectedTodo
      };
    case TOGGLE_TODO:
      const toggledTodos = todos.map(todo =>
        todo.id === selectedTodo.id
          ? { ...selectedTodo, complete: !selectedTodo.complete }
          : todo
      );
      console.log(
        `%c {type: TOGGLE_TODO, todos: ${JSON.stringify(toggledTodos)}} `,
        "color: green; font-weight: bold"
      );
      return {
        ...state,
        todos: toggledTodos
      };
    case DELETE_TODO:
      const remainingTodos = todos.filter(todo => todo.id !== selectedTodo.id);
      console.log(
        `%c {type: DELETE_TODO, todos: ${JSON.stringify(remainingTodos)}} `,
        "color: red; font-weight: bold"
      );
      return {
        ...state,
        todos: remainingTodos
      };
    case ADD_TODO:
      console.log(
        `%c {type: ADD_TODO, todos: ${JSON.stringify(
          ...todos,
          selectedTodo
        )}} `,
        "color: green; font-weight: bold"
      );
      return {
        ...state,
        todos: [...todos, selectedTodo]
      };
    default:
      return state;
  }
};

export default TodosReducer;
