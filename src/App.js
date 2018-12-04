import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn Hooks",
      isCompleted: false
    },
    {
      text: "Get better at Git",
      isCompleted: false
    },
    {
      text: "Meet Chris",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const deleteTodo = todo => {
    const newTodos = todos.filter(
      item => item.text.toLowerCase() !== todo.text.toLowerCase()
    );
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <TodoForm addTodo={addTodo} />
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            remove={deleteTodo}
            complete={completeTodo}
            completed={todos.isCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
