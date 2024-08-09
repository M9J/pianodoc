import NativeDOMElement from "../../components/utils/NativeDOMElement";
import "./Chords.css";
import { CHORDS } from "./ChordsCollection";

export default function Scales() {
  const content = Object.keys(CHORDS).map((o) => {
    const list = CHORDS[o];
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
