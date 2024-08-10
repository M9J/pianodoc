import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  ThreeKeyBuilder,
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";

const KeyC = KeybedWithLabel("C", [
  ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
  FourKeyBuilder({}),
]);

const KeyC_SHARP = KeybedWithLabel("C#", [
  ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
  FourKeyBuilder({}),
]);

const KeyD = KeybedWithLabel("D", [
  ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
  FourKeyBuilder({}),
]);

const KeyD_SHARP = KeybedWithLabel("D#", [
  ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
  FourKeyBuilder({}),
]);

const KeyE = KeybedWithLabel("E", [
  ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
  FourKeyBuilder({}),
]);

const KeyF = KeybedWithLabel("F", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [1] }),
]);

const KeyF_SHARP = KeybedWithLabel("F#", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [2] }),
]);

const KeyG = KeybedWithLabel("G", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [3] }),
]);

const KeyG_SHARP = KeybedWithLabel("G#", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [4] }),
]);

const KeyA = KeybedWithLabel("A", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [5] }),
]);

const KeyA_SHARP = KeybedWithLabel("A#", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [6] }),
]);

const KeyB = KeybedWithLabel("B", [
  ThreeKeyBuilder({ hasExtension: true }),
  FourKeyBuilder({ activeKeys: [7] }),
]);

export const KEYS: any = {
  KeyC,
  KeyC_SHARP,
  KeyD,
  KeyD_SHARP,
  KeyE,
  KeyF,
  KeyF_SHARP,
  KeyG,
  KeyG_SHARP,
  KeyA,
  KeyA_SHARP,
  KeyB,
};
