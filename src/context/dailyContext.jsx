import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DailyContext = createContext();

export function useDaily() {
  return useContext(DailyContext);
}

export function DailyProvider({ children }) {
  const [state, setState] = useState({
    frameUrl: "",
    movieName: "",
    dayId: "",
    wins: false,
    remainingAttempts: 5,
    failedAttepts: [],
    progress: "",
  });

  const fetchInitialData = async () => {
    const queryUrl = `http://143.110.166.202:8000/daily/`;
    const response = await axios.get(queryUrl);
    const { image, movie, dayid } = response.data;
    setState({ ...state, frameUrl: image, movieName: movie, dayId: dayid });
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  const value = {
    state,
    setState,
  };

  return (
    <DailyContext.Provider value={value}>{children}</DailyContext.Provider>
  );
}
