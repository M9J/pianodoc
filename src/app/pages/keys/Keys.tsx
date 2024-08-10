import NativeDOMElement from "../../components/utils/NativeDOMElement";
import "./Keys.css";
import { KEYS } from "./KeysCollection";

export default function Keys() {
  const keyRow = Object.keys(KEYS).map((k) => (
    <div className="row" key={k}>
      <NativeDOMElement child={KEYS[k]} />
    </div>
  ));
  return <div className="container">{keyRow}</div>;
}
