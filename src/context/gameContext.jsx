import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
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

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
