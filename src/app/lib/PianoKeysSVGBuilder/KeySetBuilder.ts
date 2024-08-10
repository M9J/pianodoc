import {
  BackgroundBuilder,
  BlackKeyBuilder,
  createSVGElement,
  WhiteKeyBuilder,
} from "./KeyBuilder";

const SVG_HEIGHT = "32";

export interface IKeyBuilder {
  hasExtension?: boolean;
  activeKeys?: Array<number>;
}

export type TKeySet = Node;

export function OneKeyBuilder(o?: IKeyBuilder) {
  const hasExtension = o?.hasExtension || false;
  const activeKeys = o?.activeKeys || [];
  const svg = createSVGElement("svg");
  svg.setAttribute("width", hasExtension ? "11" : "12");
  svg.setAttribute("height", SVG_HEIGHT);
  const background = BackgroundBuilder({
    width: "34",
    height: "32",
  });
  svg.appendChild(background);
  const g = createSVGElement("g");
  g.setAttribute("transform", "translate(1, 1)");
  const white1 = WhiteKeyBuilder({ isActive: activeKeys.includes(1) });
  g.appendChild(white1);
  svg.appendChild(g);
  return svg;
}

export function TwoKeyBuilder(o?: IKeyBuilder) {
  const hasExtension = o?.hasExtension || false;
  const activeKeys = o?.activeKeys || [];
  const svg = createSVGElement("svg");
  svg.setAttribute("width", hasExtension ? "22" : "23");
  svg.setAttribute("height", SVG_HEIGHT);
  const background = BackgroundBuilder({
    width: "34",
    height: "32",
  });
  svg.appendChild(background);
  const g = createSVGElement("g");
  g.setAttribute("transform", "translate(1, 1)");
  const white1 = WhiteKeyBuilder({ isActive: activeKeys.includes(1) });
  const white2 = WhiteKeyBuilder({ x: "11", isActive: activeKeys.includes(3) });
  const black1 = BlackKeyBuilder({ x: "07", isActive: activeKeys.includes(2) });
  g.appendChild(white1);
  g.appendChild(white2);
  g.appendChild(black1);
  svg.appendChild(g);
  return svg;
}

export function ThreeKeyBuilder(o?: IKeyBuilder) {
  const hasExtension = o?.hasExtension || false;
  const activeKeys = o?.activeKeys || [];
  const svg = createSVGElement("svg");
  svg.setAttribute("width", hasExtension ? "33" : "34");
  svg.setAttribute("height", SVG_HEIGHT);
  const background = BackgroundBuilder({
    width: "34",
    height: "32",
  });
  svg.appendChild(background);
  const g = createSVGElement("g");
  g.setAttribute("transform", "translate(1, 1)");
  const white1 = WhiteKeyBuilder({ isActive: activeKeys.includes(1) });
  const white2 = WhiteKeyBuilder({ x: "11", isActive: activeKeys.includes(3) });
  const white3 = WhiteKeyBuilder({ x: "22", isActive: activeKeys.includes(5) });
  const black1 = BlackKeyBuilder({ x: "07", isActive: activeKeys.includes(2) });
  const black2 = BlackKeyBuilder({ x: "18", isActive: activeKeys.includes(4) });
  g.appendChild(white1);
  g.appendChild(white2);
  g.appendChild(white3);
  g.appendChild(black1);
  g.appendChild(black2);
  svg.appendChild(g);
  return svg;
}

export function FourKeyBuilder(o?: IKeyBuilder) {
  const hasExtension = o?.hasExtension || false;
  const activeKeys = o?.activeKeys || [];
  const svg = createSVGElement("svg");
  svg.setAttribute("width", hasExtension ? "44" : "45");
  svg.setAttribute("height", SVG_HEIGHT);
  const background = BackgroundBuilder({
    width: "45",
    height: "32",
  });
  svg.appendChild(background);
  const g = createSVGElement("g");
  g.setAttribute("transform", "translate(1, 1)");
  const white1 = WhiteKeyBuilder({ isActive: activeKeys.includes(1) });
  const white2 = WhiteKeyBuilder({ x: "11", isActive: activeKeys.includes(3) });
  const white3 = WhiteKeyBuilder({ x: "22", isActive: activeKeys.includes(5) });
  const white4 = WhiteKeyBuilder({ x: "33", isActive: activeKeys.includes(7) });
  const black1 = BlackKeyBuilder({ x: "07", isActive: activeKeys.includes(2) });
  const black2 = BlackKeyBuilder({ x: "18", isActive: activeKeys.includes(4) });
  const black3 = BlackKeyBuilder({ x: "29", isActive: activeKeys.includes(6) });
  g.appendChild(white1);
  g.appendChild(white2);
  g.appendChild(white3);
  g.appendChild(white4);
  g.appendChild(black1);
  g.appendChild(black2);
  g.appendChild(black3);
  svg.appendChild(g);
  return svg;
}
