import { KeybedWithLabel } from "../../lib/KeybedWithLabel";
import {
  FourKeyBuilder,
  ThreeKeyBuilder,
} from "../../lib/PianoKeysSVGBuilder/KeySetBuilder";

const CHORDS_C = {
  CSus2: KeybedWithLabel("CSus2", [
    ThreeKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  cminor: KeybedWithLabel("cminor", [
    ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  CMajor: KeybedWithLabel("CMajor", [
    ThreeKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  CSus4: KeybedWithLabel("CSus4", [
    ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3] }),
  ]),
  CSus27: KeybedWithLabel("CSus27", [
    ThreeKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  cminor7: KeybedWithLabel("cminor7", [
    ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  CMajor7: KeybedWithLabel("CMajor7", [
    ThreeKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  CSus47: KeybedWithLabel("CSus47", [
    ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 3, 6] }),
  ]),
};

const CHORDS_C_SHARP = {
  C_SHARP_Sus2: KeybedWithLabel("C#Sus2", [
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4] }),
  ]),
  c_SHARP_minor: KeybedWithLabel("c#minor", [
    ThreeKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4] }),
  ]),
  C_SHARP_Major: KeybedWithLabel("C#Major", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  C_SHARP_Sus4: KeybedWithLabel("C#Sus4", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4] }),
  ]),
  C_SHARP_Sus27: KeybedWithLabel("C#Sus27", [
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 7] }),
  ]),
  c_SHARP_minor7: KeybedWithLabel("c#minor7", [
    ThreeKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 7] }),
  ]),
  C_SHARP_Major7: KeybedWithLabel("C#Major7", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4, 7] }),
  ]),
  C_SHARP_Sus47: KeybedWithLabel("C#Sus47", [
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 4, 7] }),
  ]),
};

const CHORDS_D = {
  DSus2: KeybedWithLabel("DSus2", [
    ThreeKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [5] }),
  ]),
  dminor: KeybedWithLabel("dminor", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 5] }),
  ]),
  DMajor: KeybedWithLabel("DMajor", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  DSus4: KeybedWithLabel("DSus4", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 5] }),
  ]),
  DSus27: KeybedWithLabel("DSus27", [
    ThreeKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  dminor7: KeybedWithLabel("dminor7", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  DMajor7: KeybedWithLabel("DMajor7", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  DSus47: KeybedWithLabel("DSus47", [
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
};

const CHORDS_D_SHARP = {
  D_SHARP_Sus2: KeybedWithLabel("D#Sus2", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 6] }),
  ]),
  d_SHARP_minor: KeybedWithLabel("d#minor", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 6] }),
  ]),
  D_SHARP_Major: KeybedWithLabel("D#Major", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6] }),
  ]),
  D_SHARP_Sus4: KeybedWithLabel("D#Sus4", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 6] }),
  ]),
  D_SHARP_Sus27: KeybedWithLabel("D#Sus27", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  d_SHARP_minor7: KeybedWithLabel("d#minor7", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  D_SHARP_Major7: KeybedWithLabel("D#Major7", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  D_SHARP_Sus47: KeybedWithLabel("D#Sus47", [
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
};

const CHORDS_E = {
  ESus2: KeybedWithLabel("ESus2", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 7] }),
  ]),
  eminor: KeybedWithLabel("eminor", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 7] }),
  ]),
  EMajor: KeybedWithLabel("EMajor", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 7] }),
  ]),
  ESus4: KeybedWithLabel("ESus4", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [5, 7] }),
  ]),
  ESus27: KeybedWithLabel("ESus27", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  eminor7: KeybedWithLabel("eminor7", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  EMajor7: KeybedWithLabel("EMajor7", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [4, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  ESus47: KeybedWithLabel("ESus47", [
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
};

const CHORDS_F = {
  FSus2: KeybedWithLabel("FSus2", [
    FourKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  fminor: KeybedWithLabel("fminor", [
    FourKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  FMajor: KeybedWithLabel("FMajor", [
    FourKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  FSus4: KeybedWithLabel("FSus4", [
    FourKeyBuilder({ activeKeys: [1, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1] }),
  ]),
  FSus27: KeybedWithLabel("FSus27", [
    FourKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  fminor7: KeybedWithLabel("fminor7", [
    FourKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  FMajor7: KeybedWithLabel("FMajor7", [
    FourKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  FSus47: KeybedWithLabel("FSus47", [
    FourKeyBuilder({ activeKeys: [1, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4] }),
  ]),
};

const CHORDS_F_SHARP = {
  F_SHARP_Sus2: KeybedWithLabel("F#Sus2", [
    FourKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  f_SHARP_minor: KeybedWithLabel("f#minor", [
    FourKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  F_SHARP_Major: KeybedWithLabel("F#Major", [
    FourKeyBuilder({ activeKeys: [2, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2] }),
  ]),
  F_SHARP_Sus4: KeybedWithLabel("F#Sus4", [
    FourKeyBuilder({ activeKeys: [2], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2] }),
  ]),
  F_SHARP_Sus27: KeybedWithLabel("F#Sus27", [
    FourKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  f_SHARP_minor7: KeybedWithLabel("f#minor7", [
    FourKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  F_SHARP_Major7: KeybedWithLabel("F#Major7", [
    FourKeyBuilder({ activeKeys: [2, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  F_SHARP_Sus47: KeybedWithLabel("F#Sus47", [
    FourKeyBuilder({ activeKeys: [2], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 2, 5] }),
  ]),
};

const CHORDS_G = {
  GSus2: KeybedWithLabel("GSus2", [
    FourKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  gminor: KeybedWithLabel("gminor", [
    FourKeyBuilder({ activeKeys: [3, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  GMajor: KeybedWithLabel("GMajor", [
    FourKeyBuilder({ activeKeys: [3, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3] }),
  ]),
  GSus4: KeybedWithLabel("GSus4", [
    FourKeyBuilder({ activeKeys: [3], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3] }),
  ]),
  GSus27: KeybedWithLabel("GSus27", [
    FourKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  gminor7: KeybedWithLabel("gminor7", [
    FourKeyBuilder({ activeKeys: [3, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  GMajor7: KeybedWithLabel("GMajor7", [
    FourKeyBuilder({ activeKeys: [3, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  GSus47: KeybedWithLabel("GSus47", [
    FourKeyBuilder({ activeKeys: [3], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
};

const CHORDS_G_SHARP = {
  G_SHARP_Sus2: KeybedWithLabel("G#Sus2", [
    FourKeyBuilder({ activeKeys: [4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4] }),
  ]),
  g_SHARP_minor: KeybedWithLabel("g#minor", [
    FourKeyBuilder({ activeKeys: [4, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4] }),
  ]),
  G_SHARP_Major: KeybedWithLabel("G#Major", [
    FourKeyBuilder({ activeKeys: [4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  G_SHARP_Sus4: KeybedWithLabel("G#Sus4", [
    FourKeyBuilder({ activeKeys: [4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4] }),
  ]),
  G_SHARP_Sus27: KeybedWithLabel("G#Sus2", [
    FourKeyBuilder({ activeKeys: [4, 6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  g_SHARP_minor7: KeybedWithLabel("g#minor7", [
    FourKeyBuilder({ activeKeys: [4, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  G_SHARP_Major7: KeybedWithLabel("G#Major7", [
    FourKeyBuilder({ activeKeys: [4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  G_SHARP_Sus47: KeybedWithLabel("G#Sus47", [
    FourKeyBuilder({ activeKeys: [4], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
};

const CHORDS_A = {
  ASus2: KeybedWithLabel("ASus2", [
    FourKeyBuilder({ activeKeys: [5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [5] }),
  ]),
  aminor: KeybedWithLabel("aminor", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 5] }),
  ]),
  AMajor: KeybedWithLabel("AMajor", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  ASus4: KeybedWithLabel("ASus4", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3, 5] }),
  ]),
  ASus27: KeybedWithLabel("ASus27", [
    FourKeyBuilder({ activeKeys: [5, 7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  aminor7: KeybedWithLabel("aminor7", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  AMajor7: KeybedWithLabel("AMajor7", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
  ASus47: KeybedWithLabel("ASus47", [
    FourKeyBuilder({ activeKeys: [5], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3, 5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [3] }),
  ]),
};

const CHORDS_A_SHARP = {
  A_SHARP_Sus2: KeybedWithLabel("A#Sus2", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  A_SHARP_Sus4: KeybedWithLabel("A#Sus4", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  a_SHARP_minor: KeybedWithLabel("a#minor", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  A_SHARP_Major: KeybedWithLabel("A#Major", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1] }),
  ]),
  A_SHARP_Sus27: KeybedWithLabel("A#Sus27", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [1], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  a_SHARP_minor7: KeybedWithLabel("a#minor7", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  A_SHARP_Major7: KeybedWithLabel("A#Major7", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
  A_SHARP_Sus47: KeybedWithLabel("A#Sus47", [
    FourKeyBuilder({ activeKeys: [6], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [1, 4] }),
  ]),
};

const CHORDS_B = {
  BSus2: KeybedWithLabel("BSus2", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  bminor: KeybedWithLabel("bminor", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  BMajor: KeybedWithLabel("BMajor", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  BSus4: KeybedWithLabel("BSus4", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2] }),
  ]),
  BSus27: KeybedWithLabel("BSus27", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [2], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  bminor7: KeybedWithLabel("bminor7", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [3], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  BMajor7: KeybedWithLabel("BMajor7", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [4], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5] }),
  ]),
  BSus47: KeybedWithLabel("BSus47", [
    FourKeyBuilder({ activeKeys: [7], hasExtension: true }),
    ThreeKeyBuilder({ activeKeys: [5], hasExtension: true }),
    FourKeyBuilder({ activeKeys: [2, 5] }),
  ]),
};

export const CHORDS: any = {
  CHORDS_C,
  CHORDS_C_SHARP,
  CHORDS_D,
  CHORDS_D_SHARP,
  CHORDS_E,
  CHORDS_F,
  CHORDS_F_SHARP,
  CHORDS_G,
  CHORDS_G_SHARP,
  CHORDS_A,
  CHORDS_A_SHARP,
  CHORDS_B,
};
