import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  OneKeyBuilder,
  ThreeKeyBuilder,
  TwoKeyBuilder
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";

const Piano88Keys = KeybedWithLabel("88 Keys (Piano/Synthesizer/Arranger)", [
  TwoKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder(),
]);

const Piano73Keys = KeybedWithLabel("73 Keys (Piano/Synthesizer/Arranger)", [
  OneKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({}),
]);

const Piano61Keys = KeybedWithLabel("61 Keys (Piano/Synthesizer/Arranger)", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder(),
]);

const Piano49Keys = KeybedWithLabel("49 Keys (MIDI Controller)", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder({}),
]);

const Piano25Keys = KeybedWithLabel("25 Keys (MIDI Controller)", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({ hasExtension: true }),
  OneKeyBuilder({}),
]);

export const MODELS: any = {
  Piano88Keys,
  Piano73Keys,
  Piano61Keys,
  Piano49Keys,
  Piano25Keys,
};
