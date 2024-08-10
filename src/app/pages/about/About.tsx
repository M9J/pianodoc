import NativeDOMElement from "../../components/utils/NativeDOMElement";
import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  ThreeKeyBuilder,
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";
import "./About.css";

const PianoChordCMinor = KeybedWithLabel("", [
  ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
  FourKeyBuilder({ activeKeys: [3] }),
]);

export default function About() {
  return (
    <div className="about-container">
      <div className="about-container-background-container">
        <div className="about-container-background-image">
          <NativeDOMElement child={PianoChordCMinor} />
        </div>
      </div>
      <div className="about-information-container">
        <div className="about-row">
          <div className="about-column">
            <img
              className="about-icon"
              src={process.env.PUBLIC_URL + "/assets/pianodoc/pianodoc.png"}
              alt="information icon"
            />
          </div>
          <div className="about-column">
            <div className="about-row about-name">PianoDoc</div>
            <div className="about-row about-developer">M9J.github.io</div>
            <div className="about-row about-version">v3.0.0</div>
          </div>
        </div>
        <div className="about-column">
          <div className="about-property-value">
            PianoDoc is a reference book aimed at beginner level piano players
            to get an understanding of the keys, scales, chords, and models of
            piano keys. The focus is only on the black and white keys and its
            behavior. The key arrangement is not realistic, but an idealistic
            approach is considered.
          </div>
          <div className="about-property">Developer</div>
          <div className="about-property-value">M9J</div>
          <div className="about-property">Release Date</div>
          <div className="about-property-value">27JUL2024</div>
          <div className="about-property">Last Updated</div>
          <div className="about-property-value">09AUG2024</div>
        </div>
      </div>
    </div>
  );
}
