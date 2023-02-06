import { useNavigate } from "react-router-dom";
import MovieFrame from "../comons/MovieFrame";
import Searchbar from "../comons/Searchbar";
import Attempts from "../comons/Attempts";
import { useDaily } from "../../context/dailyContext";

export default function DaillyPuzzle() {
  const { state, setState } = useDaily();
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
    navigate("/daily-result", { replace: true });
  };

  return (
    <>
      <MovieFrame frameUrl={state.frameUrl} />
      {state.remainingAttempts > 0 && <Searchbar getUserData={getUserData} />}
      <Attempts
        remainingAttempts={state.remainingAttempts}
        failedAttepts={state.failedAttepts}
      />
    </>
  );
}
