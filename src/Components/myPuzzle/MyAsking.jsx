import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useMy } from "../../context/myContext";
import Attempts from "../comons/Attempts";
import MovieFrame from "../comons/MovieFrame";
import Searchbar from "../comons/Searchbar";
import Timer from "./Timer";

export default function MyAsking() {
  const { state, setState } = useMy();
  const navigate = useNavigate();

  const getUserData = (data) => {
    // Compare wining
    if (data.toLowerCase() !== state.movieName.toLowerCase()) {
      setState({
        ...state,
        remainingAttempts: state.remainingAttempts - 1,
        failedAttepts: [...state.failedAttepts, data],
        searchValue: "",
        progress: (state.progress += "❌"),
      });
      return;
    }
    setState({ ...state, wins: true });
    navigate("/my-result", { replace: true });
  };

  useEffect(() => {
    window.timerIterval = setInterval(() => {
      setState((prevState) => ({ ...prevState, timer: prevState.timer - 1 }));
    }, 1000);
  }, []);

  if (state.timer <= 0) {
    clearInterval(window.timerIterval);
  }

  return (
    <>
      <div className="timerWrapper">
        <NavLink className="gobackBtn" to="/mypuzzle">
          Go back
        </NavLink>
        <Timer time={state.timer} />
      </div>
      <MovieFrame frameUrl={state.frameUrl} />
      {state.timer > 0 ? (
        <>
          {state.remainingAttempts > 0 && (
            <Searchbar getUserData={getUserData} />
          )}
        </>
      ) : (
        <p className="timeIsOver">Your time is over!</p>
      )}
      <Attempts
        remainingAttempts={state.remainingAttempts}
        failedAttepts={state.failedAttepts}
      />
    </>
  );
}
