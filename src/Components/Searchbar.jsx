import axios from "axios";

export default function ({
  state,
  setState,
  suggestion,
  setSuggestion,
  compareUserData,
}) {
  const handleChange = async (e) => {
    let userData = e.target.value;
    setState({ ...state, searchValue: userData });

    try {
      // Axios GET request
      let queryUrl = `http://143.110.166.202:8000/search/a/`;

      let queryResponse = await axios.get(queryUrl);
      if (state.searchValue !== "") {
        setSuggestion(queryResponse.data.result);
      } else {
        setSuggestion([]);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.movieName.value) return;
    compareUserData(e.target.movieName.value);
  };

  const handleClick = (e) => {
    let value = e.target.innerText;
    compareUserData(value);
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
            value={state.searchValue}
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
