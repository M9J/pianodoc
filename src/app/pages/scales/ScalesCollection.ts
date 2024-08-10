import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  ThreeKeyBuilder
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";

const SCALE_C = {
  CMajor: KeybedWithLabel("CMajor", [
    ThreeKeyBuilder({ activeKeys: [1, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  cminor: KeybedWithLabel("cminor", [
    ThreeKeyBuilder({ activeKeys: [1, 3, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 4, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
};

const SCALE_C_SHARP = {
  C_SHARP_Major: KeybedWithLabel("C#Major", [
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 2, 4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2] }),
  ]),
  c_SHARP_minor: KeybedWithLabel("c#minor", [
    ThreeKeyBuilder({ activeKeys: [2, 4, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2] }),
  ]),
};

const SCALE_D = {
  DMajor: KeybedWithLabel("DMajor", [
    ThreeKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 3, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 3] }),
  ]),
  dminor: KeybedWithLabel("dminor", [
    ThreeKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 5, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 3] }),
  ]),
};

const SCALE_D_SHARP = {
  D_SHARP_Major: KeybedWithLabel("D#Major", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 4] }),
  ]),
  d_SHARP_minor: KeybedWithLabel("d#minor", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 2, 4, 6, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3, 4] }),
  ]),
};

const SCALE_E = {
  EMajor: KeybedWithLabel("EMajor", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4, 5] }),
  ]),
  eminor: KeybedWithLabel("eminor", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 3, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4, 5] }),
  ]),
};

const SCALE_F = {
  FMajor: KeybedWithLabel("FMajor", [
    FourKeyBuilder({ activeKeys: [1, 3, 5, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  fminor: KeybedWithLabel("fminor", [
    FourKeyBuilder({ activeKeys: [1, 3, 4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
};

const SCALE_F_SHARP = {
  F_SHARP_Major: KeybedWithLabel("F#Major", [
    FourKeyBuilder({ activeKeys: [2, 4, 6, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 2] }),
  ]),
  f_SHARP_minor: KeybedWithLabel("f#minor", [
    FourKeyBuilder({ activeKeys: [2, 4, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 2] }),
  ]),
};

const SCALE_G = {
  GMajor: KeybedWithLabel("GMajor", [
    FourKeyBuilder({ activeKeys: [3, 5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 3] }),
  ]),
  gminor: KeybedWithLabel("gminor", [
    FourKeyBuilder({ activeKeys: [3, 5, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 3] }),
  ]),
};

const SCALE_G_SHARP = {
  G_SHARP_Major: KeybedWithLabel("G#Major", [
    FourKeyBuilder({ activeKeys: [4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 4] }),
  ]),
  g_SHARP_minor: KeybedWithLabel("g#minor", [
    FourKeyBuilder({ activeKeys: [4, 6, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 4] }),
  ]),
};

const SCALE_A = {
  AMajor: KeybedWithLabel("AMajor", [
    FourKeyBuilder({ activeKeys: [5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4, 5] }),
  ]),
  aminor: KeybedWithLabel("aminor", [
    FourKeyBuilder({ activeKeys: [5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4, 5] }),
  ]),
};

const SCALE_A_SHARP = {
  A_SHARP_Major: KeybedWithLabel("A#Major", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 5, 6] }),
  ]),
  a_SHARP_minor: KeybedWithLabel("a#minor", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 2, 5, 6] }),
  ]),
};

const SCALE_B = {
  BMajor: KeybedWithLabel("BMajor", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4, 6, 7] }),
  ]),
  bminor: KeybedWithLabel("bminor", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 3, 6, 7] }),
  ]),
};

export const SCALES: any = {
  SCALE_C,
  SCALE_C_SHARP,
  SCALE_D,
  SCALE_D_SHARP,
  SCALE_E,
  SCALE_F,
  SCALE_F_SHARP,
  SCALE_G,
  SCALE_G_SHARP,
  SCALE_A,
  SCALE_A_SHARP,
  SCALE_B,
};
