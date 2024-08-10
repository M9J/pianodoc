import { Link } from "react-router-dom";
import NativeDOMElement from "../../components/utils/NativeDOMElement";
import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  OneKeyBuilder,
  ThreeKeyBuilder,
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";
import "./Modules.css";

const PianoKeys = KeybedWithLabel("", [
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({}),
]);

const PianoChordCMinor = KeybedWithLabel("", [
  ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
  FourKeyBuilder({ activeKeys: [3] }),
]);

const PianoScaleC = KeybedWithLabel("", [
  ThreeKeyBuilder({ activeKeys: [1, 3, 4], hasExtension: true }),
  FourKeyBuilder({ activeKeys: [1, 3, 4, 7], hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1] }),
]);

const PianoModel25Keys = KeybedWithLabel("", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder({}),
]);

export default function Modules() {
  return (
    <>
      <div className="modules">
        <Link to="keys">
          <div className="module">
            <div className="module-thumbnail">
              <NativeDOMElement child={PianoKeys} />
            </div>
            <div className="module-title">Keys</div>
          </div>
        </Link>
        <Link to="scales">
          <div className="module">
            <div className="module-thumbnail">
              <NativeDOMElement child={PianoScaleC} />
            </div>
            <div className="module-title">Scales</div>
          </div>
        </Link>
        <Link to="chords">
          <div className="module">
            <div className="module-thumbnail">
              <NativeDOMElement child={PianoChordCMinor} />
            </div>
            <div className="module-title">Chords</div>
          </div>
        </Link>
        <Link to="models">
          <div className="module">
            <div className="module-thumbnail">
              <NativeDOMElement child={PianoModel25Keys} />
            </div>
            <div className="module-title">Models</div>
          </div>
        </Link>
      </div>
      <div className="modules">
        <Link to="about">
          <div className="app-module">
            <div className="app-module-thumbnail">
              <img
                className="app-module-icon"
                src="assets/icons/info.png"
                alt="information icon"
              />
            </div>
            <div className="app-module-title">About PianoDoc</div>
          </div>
        </Link>
      </div>
    </>
  );
}
