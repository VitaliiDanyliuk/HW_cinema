import { Link } from "react-router-dom";
import "./header.css";
export function Header() {
  return (
    <header className="header">
      <Link to={`/`}>
        <div className="logo"> Vilm</div>
      </Link>
      <input type="search" placeholder="🔍︎"></input>
    </header>
  );
}
