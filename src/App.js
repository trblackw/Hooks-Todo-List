import React, { useContext, useReducer } from "react";
import TodosContext from "./state/context";
import TodosReducer from "./state/reducer";

const App = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(TodosReducer, initialState);
   return (
      <TodosContext.Provider value={{state, dispatch}}>
         
     </TodosContext.Provider>
  )
};

export default App;
