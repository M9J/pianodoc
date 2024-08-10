import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="brand">PIANODOC</div>
      </Link>
    </header>
  );
}
