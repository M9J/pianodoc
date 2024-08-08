import { Link } from "react-router-dom";
import "./Modules.css";

export default function Modules() {
  return (
    <div className="modules">
      <Link to="keys">
        <div className="module">
          <div className="module-title">Keys</div>
        </div>
      </Link>
      <Link to="scales">
        <div className="module">
          <div className="module-title">Scales</div>
        </div>
      </Link>
      <Link to="chords">
        <div className="module">
          <div className="module-title">Chords</div>
        </div>
      </Link>
      <Link to="models">
        <div className="module">
          <div className="module-title">Models</div>
        </div>
      </Link>
    </div>
  );
}
