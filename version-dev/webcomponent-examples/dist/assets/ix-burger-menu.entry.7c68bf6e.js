import { r as registerInstance, h, H as Host } from "./index.6063163d.js";
const burgerMenuCss = ":host{display:flex;justify-content:center;align-items:center;height:2rem;width:2.5rem;border-radius:var(--theme-btn--border-radius)}:host svg{display:inline-block;fill:var(--theme-menu-btn--color);position:relative}:host .line{fill:none;stroke:var(--theme-menu-btn--color);stroke-width:6;transition:stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)}:host .line1{stroke-dasharray:60 207;stroke-width:6}:host .line2{stroke-dasharray:60 60;stroke-width:6}:host .line3{stroke-dasharray:60 207;stroke-width:6}:host(:hover){background-color:var(--theme-menu-btn--background--hover);border-radius:var(--theme-btn--border-radius)}:host(:active){background-color:var(--theme-menu-btn--background--active);border-radius:var(--theme-btn--border-radius)}:host(.expanded) .line1{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}:host(.expanded) .line2{stroke-dasharray:1 60;stroke-dashoffset:-30;stroke-width:6}:host(.expanded) .line3{stroke-dasharray:90 207;stroke-dashoffset:-134;stroke-width:6}";
const BurgerMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.expanded = false;
  }
  render() {
    return h(Host, { class: {
      expanded: this.expanded
    } }, h("svg", { width: "32", height: "32", viewBox: "0 0 100 100" }, h("path", { class: "line line1", d: "M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" }), h("path", { class: "line line2", d: "M 20,50 H 60" }), h("path", { class: "line line3", d: "M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" })));
  }
};
BurgerMenu.style = burgerMenuCss;
export {
  BurgerMenu as ix_burger_menu
};
