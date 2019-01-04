import { TOGGLE_TODO } from "../components/TodoList";

const TodosReducer = (state = {}, action) => {
  const { type, todo: selectedTodo } = action;
  const { todos } = state;
  switch (type) {
    case TOGGLE_TODO:
      const toggledTodos = todos.map(todo =>
        todo.id === selectedTodo.id
          ? { ...selectedTodo, complete: !selectedTodo.complete }
          : todo
      );
      return {
        ...state,
        todos: toggledTodos
      };
    default:
      return state;
  }
};

export default TodosReducer;
