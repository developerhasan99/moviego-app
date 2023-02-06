import { NavLink } from "react-router-dom";
import { useMy } from "../../context/myContext";
import MovieFrame from "../comons/MovieFrame";

export default function MyResult() {
  const { state, setState } = useMy();

  return (
    <>
      {state.wins ? (
        <>
          <MovieFrame frameUrl={state.frameUrl} />
          <h1 className="congreats">Congratulations!</h1>

          <h2 style={{ textAlign: "center", color: "#fff" }}>
            {state.progress}✅ {state.movieName}
          </h2>
          <div className="myresultbuttonswrapper">
            <a className="myresultbtn" href="/">
              Back to menu
            </a>
            <NavLink className="myresultbtn" to="/mypuzzle">
              Play another
            </NavLink>
          </div>
        </>
      ) : (
        <p className="direct_acess">Please Play first to see the result!</p>
      )}
    </>
  );
}
