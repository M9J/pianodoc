// const COLOR_PINK_LEGACY = "#f8a";
// const COLOR_BLUE_LEGACY = "#8af";
const COLOR_PINK = "#FFC3D4";
const COLOR_BLUE = "#C3D4FF";
const KEY_WHITE_ACTIVE_COLOR = COLOR_BLUE;
const KEY_BLACK_ACTIVE_COLOR = COLOR_PINK;
const KEY_WHITE_COLOR = "#fff";
const KEY_BLACK_COLOR = "#000";

export interface IBackgroundBuilder {
  width?: string;
  height?: string;
}

export interface IBlackKeyBuilder {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  isActive?: boolean;
}

export interface IWhiteKeyBuilder {
  x?: string;
  y?: string;
  width?: string;
  height?: string;
  isActive?: boolean;
}

export function BackgroundBuilder(o?: IBackgroundBuilder): SVGElement {
  const width = o?.width || "08";
  const height = o?.height || "20";
  const rect = createSVGElement("rect");
  rect.setAttribute("x", "00");
  rect.setAttribute("y", "00");
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "#000");
  return rect;
}

export function BlackKeyBuilder(o?: IBlackKeyBuilder): SVGElement {
  const x = o?.x || "00";
  const y = o?.y || "00";
  const width = o?.width || "07";
  const height = o?.height || "20";
  const isActive = o?.isActive || false;
  const g = createSVGElement("g");
  const rect = createSVGElement("rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", "#000");
  const rect2 = createSVGElement("rect");
  rect2.setAttribute("x", (+x + 1).toString());
  rect2.setAttribute("y", (+y).toString());
  rect2.setAttribute("width", (+width - 2).toString());
  rect2.setAttribute("height", (+height - 1).toString());
  rect2.setAttribute(
    "fill",
    isActive ? KEY_BLACK_ACTIVE_COLOR : KEY_BLACK_COLOR
  );
  g.appendChild(rect);
  g.appendChild(rect2);
  return g;
}

export function WhiteKeyBuilder(o?: IWhiteKeyBuilder): SVGElement {
  const x = o?.x || "00";
  const y = o?.y || "00";
  const width = o?.width || "10";
  const height = o?.height || "30";
  const isActive = o?.isActive || false;
  const rect = createSVGElement("rect");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute(
    "fill",
    isActive ? KEY_WHITE_ACTIVE_COLOR : KEY_WHITE_COLOR
  );
  return rect;
}

export function createSVGElement(e: string): SVGElement {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
