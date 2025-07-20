import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const TodosContext = createContext();

export function TodosContextProvider({ children }) {
  const [todos, setTodos] = useState(() => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  return storedTodos ?? [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
