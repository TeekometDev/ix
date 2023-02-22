import { a as applyPolyfills, d as defineCustomElements } from "./index.6063163d.js";
const ixAggrid = "";
window.customElements.define(
  "placeholder-logo",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      if (this.isInitialRender) {
        return;
      }
      this.isInitialRender = true;
      this.firstRender();
    }
    firstRender() {
      const _template = document.createElement("template");
      _template.innerHTML = `
      <svg xmlns='http://www.w3.org/2000/svg' width='136.221' height='12' viewBox='0 0 136.221 12'>
        <g id='Gruppe_4763' data-name='Gruppe 4763' transform='translate(-85 -28)'>
          <g id='Polygon_3' data-name='Polygon 3' transform='translate(111 28)' fill='none'>
            <path d='M7,0l7,12H0Z' stroke='none'/>
            <path d='M 7 3.969271659851074 L 3.482074737548828 10 L 10.51792526245117 10 L 7 3.969271659851074 M 7 9.5367431640625e-07 L 14 12 L 0 12 L 7 9.5367431640625e-07 Z' stroke='none' fill='var(--theme-app-header-logo--color)'/>
          </g>
          <g id='Ellipse_14' data-name='Ellipse 14' transform='translate(99 28)' fill='none' stroke='var(--theme-app-header-logo--color)' stroke-width='2'>
            <circle cx='6' cy='6' r='6' stroke='none'/>
            <circle cx='6' cy='6' r='5' fill='none'/>
          </g>
          <g id='Rechteck_1111' data-name='Rechteck 1111' transform='translate(85 28)' fill='none' stroke='var(--theme-app-header-logo--color)' stroke-width='2'>
            <rect width='12' height='12' stroke='none'/>
            <rect x='1' y='1' width='10' height='10' fill='none'/>
          </g>
          <path id='Pfad_4060' data-name='Pfad 4060' d='M4.289,14.938V10.177L-.137,3.347H2.89L4.8,6.415q.376.605.859,1.513.458-.875.867-1.538l1.9-3.043h2.855L6.9,10.177v4.761Zm12.54-11.8a5.162,5.162,0,0,1,4.188,1.734,6.4,6.4,0,0,1,1.4,4.27,6.2,6.2,0,0,1-1.652,4.54,5.249,5.249,0,0,1-3.935,1.456,5.162,5.162,0,0,1-4.188-1.734,6.5,6.5,0,0,1-1.4-4.335A6.126,6.126,0,0,1,12.894,4.59,5.283,5.283,0,0,1,16.829,3.143ZM16.82,5.188a2.46,2.46,0,0,0-2.184,1.178,4.906,4.906,0,0,0-.7,2.732,4.78,4.78,0,0,0,.826,2.994,2.617,2.617,0,0,0,4.254-.18,4.922,4.922,0,0,0,.7-2.765,4.706,4.706,0,0,0-.826-2.953A2.484,2.484,0,0,0,16.82,5.188Zm7.64-1.84H27.07v6.732a4.482,4.482,0,0,0,.368,2.249,1.662,1.662,0,0,0,.728.56,2.652,2.652,0,0,0,1.063.209,2.744,2.744,0,0,0,1.194-.249,1.6,1.6,0,0,0,.753-.675,5.051,5.051,0,0,0,.286-2.094V3.347H33.99V9.768a15.378,15.378,0,0,1-.139,2.593q-.6,2.781-4.63,2.781-3.125,0-4.18-1.669a3.279,3.279,0,0,1-.466-1.28,17.763,17.763,0,0,1-.115-2.425ZM36.64,14.938V3.347h4.188a8.256,8.256,0,0,1,1.763.151,3.086,3.086,0,0,1,1.141.495,2.874,2.874,0,0,1,1.145,2.47,3.085,3.085,0,0,1-.56,1.881,2.812,2.812,0,0,1-1.6,1.039,1.748,1.748,0,0,1,.773.6,11.953,11.953,0,0,1,.863,1.689l1.464,3.264H43.029L42.1,12.721A8.465,8.465,0,0,0,41.09,10.8a1.551,1.551,0,0,0-1.235-.54H39.25v4.679ZM39.184,8.3h.908a3.137,3.137,0,0,0,1.481-.27,1.328,1.328,0,0,0,.7-1.26,1.294,1.294,0,0,0-.5-1.137,3.09,3.09,0,0,0-1.677-.327h-.908Zm12.434,6.634V3.347h1.342V13.834h5.022v1.1ZM63.626,3.183a4.487,4.487,0,0,1,3.8,1.775,6.745,6.745,0,0,1,1.317,4.188,7.153,7.153,0,0,1-.605,2.961A4.618,4.618,0,0,1,63.618,15.1a4.5,4.5,0,0,1-3.8-1.775A6.815,6.815,0,0,1,58.5,9.081a7.051,7.051,0,0,1,.605-2.9A4.618,4.618,0,0,1,63.626,3.183Zm0,1.1a3.231,3.231,0,0,0-2.806,1.44,5.763,5.763,0,0,0-.9,3.362,5.71,5.71,0,0,0,1.072,3.7,3.445,3.445,0,0,0,5.423-.229,5.794,5.794,0,0,0,.908-3.411A5.605,5.605,0,0,0,66.252,5.5,3.237,3.237,0,0,0,63.626,4.288Zm15.9,4.671v5.481a10.2,10.2,0,0,1-1.734.479A9.6,9.6,0,0,1,76,15.1a5.161,5.161,0,0,1-3.8-1.456,5.848,5.848,0,0,1-1.636-4.352,6.279,6.279,0,0,1,1.644-4.556,5.1,5.1,0,0,1,3.845-1.554A8.072,8.072,0,0,1,79.446,4l-.393,1.072a6.617,6.617,0,0,0-3.043-.785,3.483,3.483,0,0,0-3.018,1.481,5.926,5.926,0,0,0-1.006,3.509,4.879,4.879,0,0,0,1.374,3.7A3.852,3.852,0,0,0,76.133,14a6.167,6.167,0,0,0,2.053-.368V10.063H75.9v-1.1Zm7.436-5.775a4.487,4.487,0,0,1,3.8,1.775,6.745,6.745,0,0,1,1.317,4.188,7.153,7.153,0,0,1-.605,2.961A4.618,4.618,0,0,1,86.955,15.1a4.5,4.5,0,0,1-3.8-1.775,6.815,6.815,0,0,1-1.317-4.245,7.051,7.051,0,0,1,.605-2.9A4.618,4.618,0,0,1,86.963,3.183Zm0,1.1a3.231,3.231,0,0,0-2.806,1.44,5.763,5.763,0,0,0-.9,3.362,5.71,5.71,0,0,0,1.072,3.7,3.445,3.445,0,0,0,5.423-.229,5.794,5.794,0,0,0,.908-3.411A5.605,5.605,0,0,0,89.589,5.5,3.237,3.237,0,0,0,86.963,4.288Z' transform='translate(129.137 24.857)' fill='var(--theme-app-header-logo--color)'/>
        </g>
      </svg>
    `;
      const template = _template.content.cloneNode(true);
      this.append(template);
    }
  }
);
function loadAdditionalTheme() {
  const theme = { "loader": "ix-brand-theme/loader", "css": "ix-brand-theme/dist/ix-brand-theme/ix-brand-theme.css" };
  if (theme == null ? void 0 : theme.css) {
    const base = `./../additional-theme`;
    const css = theme.css;
    const head = document.head;
    const style_link = document.createElement("link");
    style_link.rel = "stylesheet";
    style_link.href = `${base}/${css}`;
    head.appendChild(style_link);
    const loader = `${base}/${theme.loader}/index.es2017.js`;
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import { defineCustomElements } from '${loader}';
      defineCustomElements();
    `;
    head.appendChild(script);
  }
}
function detectThemeSwitching() {
  const searchParams = new URLSearchParams(location.search);
  if (searchParams.has("theme")) {
    const theme = searchParams.get("theme");
    document.body.className = theme;
  }
}
function addMarginToDemo() {
  const searchParams = new URLSearchParams(location.search);
  if (!searchParams.has("no-margin")) {
    document.body.style.margin = "1rem";
  }
}
(async function init() {
  await applyPolyfills();
  await defineCustomElements();
  detectThemeSwitching();
  addMarginToDemo();
  loadAdditionalTheme();
})();
