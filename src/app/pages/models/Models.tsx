import NativeDOMElement from "../../components/utils/NativeDOMElement";
import "./Models.css";
import { MODELS } from "./ModelsCollection";

export default function Keys() {
  const keyRow = Object.keys(MODELS).map((o) => (
    <div className="row" key={o}>
      <NativeDOMElement child={MODELS[o]} />
    </div>
  ));
  return <div className="container">{keyRow}</div>;
}
