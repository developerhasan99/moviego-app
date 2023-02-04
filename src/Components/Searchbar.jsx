import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { movieNames } from "../utils/movieNames";
import { useGame } from "../context/gameContext";

export default function () {
  const { state, setState } = useGame();
  const [searchValue, setSearchValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    let userData = e.target.value;
    setSearchValue(userData);

    if (userData) {
      let newSuggestions = movieNames.filter((value) =>
        value.toLowerCase().startsWith(userData.toLowerCase())
      );

      setSuggestion(newSuggestions);
    }

    return;
  };

  const compareWinning = (data) => {
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
    navigate("/result", { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  const handleClick = (e) => {
    setSearchValue("");
    setSuggestion([]);
    let value = e.target.innerText;
    compareWinning(value);
  };

  const suggestedElements = suggestion.map((value, index) => (
    <li onClick={handleClick} key={index}>
      {value}
    </li>
  ));

  return (
    <>
      {state.remainingAttempts > 0 && (
        <form onSubmit={handleSubmit} className="search_form">
          <input
            onChange={handleChange}
            value={searchValue}
            type="text"
            name="movieName"
            placeholder="Search for movie..."
            autoComplete="off"
          />
          {suggestion.length > 0 && (
            <ul className="suggestion">{suggestedElements}</ul>
          )}
        </form>
      )}
    </>
  );
}
