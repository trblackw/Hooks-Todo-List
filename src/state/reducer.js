import {
  TOGGLE_TODO,
  DELETE_TODO,
  SET_CURRENT_TODO
} from "../components/TodoList";
import { ADD_TODO, EDIT_TODO } from "../components/AddTodoForm";

const TodosReducer = (state, action) => {
  const { type, todo: selectedTodo } = action;
  const { todos, currentTodo } = state;
  switch (type) {
    case SET_CURRENT_TODO:
      console.log(
        `%c {type: SET_CURRENT_TODO, todos: ${JSON.stringify(selectedTodo)}} `,
        "color: yellow; font-weight: bold"
      );
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
      const isRemovedTo = currentTodo.id === selectedTodo.id ? {} : currentTodo;
      console.log(
        `%c {type: DELETE_TODO, todos: ${JSON.stringify(remainingTodos)}} `,
        "color: red; font-weight: bold"
      );
      return {
        ...state,
        currentTodo: isRemovedTo,
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
    case EDIT_TODO:
      const edittedTodo = todos.find(todo => todo.id === currentTodo.id);
      const modifiedTodos = todos.map(todo => {
        if (todo.id === edittedTodo.id) {
          const updatedTodo = { ...todo, text: edittedTodo.text };
          todo = updatedTodo;
          return todo;
        } else {
          return todo;
        }
      });
      return {
        ...state,
        currentTodo: {},
        todos: modifiedTodos
      };
    default:
      return state;
  }
};

export default TodosReducer;
