import { useState } from "react";
import { movieNames } from "../../utils/movieNames";

export default function ({ getUserData }) {
  const [searchValue, setSearchValue] = useState("");
  const [suggestion, setSuggestion] = useState([]);

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

  const handleClick = (e) => {
    setSearchValue("");
    setSuggestion([]);
    let value = e.target.innerText;
    getUserData(value);
  };

  const suggestedElements = suggestion.map((value, index) => (
    <li onClick={handleClick} key={index}>
      {value}
    </li>
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };

  return (
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
  );
}
