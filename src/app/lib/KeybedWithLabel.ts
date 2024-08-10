import { TKeySet } from "./PianoKeysSVGBuilder/KeySetBuilder";

export function KeybedWithLabel(
  label: string,
  keySetArray: TKeySet[]
): HTMLElement {
  const keybedWithLabelContainer = document.createElement("div");
  const hasKeySetArray = Array.isArray(keySetArray)
    ? keySetArray.length > 0
    : false;
  if (hasKeySetArray) {
    const keySetContainer = document.createElement("div");
    keySetContainer.style.display = "flex";
    keySetArray.forEach((ks: Node) => {
      const keySet: Node = ks as Node;
      (keySetContainer as HTMLElement).appendChild(keySet);
    });
    const labelDiv = document.createElement("div");
    labelDiv.style.fontWeight = "900";
    labelDiv.innerHTML = label;
    keybedWithLabelContainer.style.display = "flex";
    keybedWithLabelContainer.style.flexDirection = "column";
    keybedWithLabelContainer.appendChild(keySetContainer);
    keybedWithLabelContainer.appendChild(labelDiv);
  }
  return keybedWithLabelContainer;
}
