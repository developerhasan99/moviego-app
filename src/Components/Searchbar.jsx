import { useState } from "react";
import { movieNames } from "../utils/movieNames";

export default function ({ searchValue, setSearchValue }) {
  const [suggestion, setSuggestion] = useState([]);

  const handleChange = (e) => {
    let userData = e.target.value;

    setSearchValue(userData);

    let filterdMovies = [];

    if (userData) {
      filterdMovies = movieNames.filter((data) => {
        //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
        return data
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
    }

    let slicedNames = filterdMovies.slice(0, 30);

    let sortedNames = slicedNames.sort((a, b) => {
      let step = 0;
    });

    setSuggestion(sortedNames);
  };

  const suggestedElements = suggestion.map((value, index) => (
    <li key={index}>{value}</li>
  ));

  return (
    <form className="search_form">
      <input
        onChange={handleChange}
        value={searchValue}
        type="text"
        placeholder="Search for movie..."
        autoComplete="off"
      />
      {suggestion.length > 0 && (
        <ul className="suggestion">{suggestedElements}</ul>
      )}
    </form>
  );
}