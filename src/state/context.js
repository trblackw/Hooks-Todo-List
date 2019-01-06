import { createContext } from "react";
import { generateTimeStamp } from "../helpers";
import uuidv4 from "uuid/v4";

const TodosContext = createContext({
  todos: [
    {
      id: uuidv4(),
      text: "Eat breakfast",
      complete: false,
      created: generateTimeStamp()
    },
    {
      id: uuidv4(),
      text: "Do laundry",
      complete: false,
      created: generateTimeStamp()
    },
    {
      id: uuidv4(),
      text: "Finish project",
      complete: true,
      created: generateTimeStamp()
    }
  ],
  currentTodo: {}
});

export default TodosContext;
