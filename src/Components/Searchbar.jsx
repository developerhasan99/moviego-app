import { movieNames } from "../utils/movieNames";

export default function ({ searchValue, setSearchValue }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  return (
    <form className="search_form">
      <input
        onChange={handleChange}
        value={searchValue}
        type="text"
        placeholder="Search for movie..."
        autocomplete="off"
      />
      <ul className="suggestion">
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
        <li>sugas sfs</li>
      </ul>
    </form>
  );
}
