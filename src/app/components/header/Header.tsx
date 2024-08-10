import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  let moduleName = "";
  if (location.pathname === "/chords") {
    moduleName = "Chords";
  } else if (location.pathname === "/keys") {
    moduleName = "Keys";
  } else if (location.pathname === "/models") {
    moduleName = "Models";
  } else if (location.pathname === "/scales") {
    moduleName = "Scales";
  } else if (location.pathname === "/about") {
    moduleName = "About";
  }

  let prevButton = null;
  if (moduleName) {
    prevButton = <i className="triangle-left"></i>;
  }
  return (
    <header className="header">
      <Link to="/" className="homepage-link">
        {prevButton}
        <div className="brand">PIANODOC</div>
      </Link>
      <div className="current-module-name">{moduleName}</div>
    </header>
  );
}
