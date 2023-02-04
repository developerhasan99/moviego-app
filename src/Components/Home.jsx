import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home_wrapper">
      <h1>Welcome to MovieGO!</h1>
      <div className="buttons_wrapper">
        <NavLink to="/dailypuzzle">Daily Puzzle</NavLink>
        <NavLink to="/mypuzzle">My Puzzle</NavLink>
      </div>
    </div>
  );
}
