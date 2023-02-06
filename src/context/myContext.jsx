import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export function useMy() {
  return useContext(MyContext);
}

export function MyProvider({ children }) {
  const [state, setState] = useState({
    frameUrl: "",
    movieName: "",
    wins: false,
    remainingAttempts: 5,
    failedAttepts: [],
    progress: "",
    timer: 45,
  });

  const value = {
    state,
    setState,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
