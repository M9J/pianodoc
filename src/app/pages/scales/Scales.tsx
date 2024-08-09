import NativeDOMElement from "../../components/utils/NativeDOMElement";
import "./Scales.css";
import { SCALES } from "./ScalesCollection";

export default function Scales() {
  const content = Object.keys(SCALES).map((o) => {
    const list = SCALES[o];
    const RowItems = Object.keys(list).map((oo) => (
      <NativeDOMElement key={oo} child={list[oo]} />
    ));

    return (
      <div className="row" key={o}>
        {RowItems}
      </div>
    );
  });
  return <div className="container">{content}</div>;
}
