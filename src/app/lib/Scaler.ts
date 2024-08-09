import { createSVGElement } from "./PianoKeysSVGBuilder/KeyBuilder";

export function Scale(itemToBeScaled: HTMLElement, scaleFactor?: number) {
  if (!scaleFactor) scaleFactor = 1.0;
  const svgs = itemToBeScaled.getElementsByTagName("svg");
  let maxContainerWidth = 0;
  let maxContainerHeight = 0;
  for (let i = 0; i < svgs.length; i++) {
    const s = svgs.item(i);
    if (s) {
      const svgWidth = s.getAttribute("width");
      const svgHeight = s.getAttribute("height");
      if (svgWidth) maxContainerWidth += parseInt(svgWidth);
      if (svgHeight) {
        const parsedSVGHeight = parseInt(svgHeight);
        if (parsedSVGHeight > maxContainerHeight) {
          maxContainerHeight = parsedSVGHeight;
        }
      }
    }
  }
  const scaledWidth = maxContainerWidth * scaleFactor;
  const scaledHeight = maxContainerHeight * scaleFactor;
  console.log(scaledWidth, scaledHeight);
  const g = createSVGElement("g");
  g.setAttribute("width", scaledWidth.toString());
  g.setAttribute("height", scaledHeight.toString());
  for (let i = 0; i < svgs.length; i++) {
    const s = svgs.item(i);
    if (s) {
      s.setAttribute("transform", "scale(" + scaleFactor + ")");
      g.appendChild(s);
    }
  }
  const scaledSVG = createSVGElement("svg");
  scaledSVG.setAttribute("width", scaledWidth.toString());
  scaledSVG.setAttribute("height", scaledHeight.toString());
  scaledSVG.appendChild(g);
  return scaledSVG;
}
