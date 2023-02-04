import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <NavLink className="logo" to="/">
        MovieGo!
      </NavLink>
    </header>
  );
}
