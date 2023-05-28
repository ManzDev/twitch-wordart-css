import "./WordArt.js";

const TYPES = [
  "outline",
  "spin",
  "arc",
  "double-arc",
  "arc-invert",
  "hollow",
  "classic",
  "texture-1",
  "grayscale",
  "blue-text",
  "gold",
  "purple",
  "double",
  "multicolor",
  "spline",
  "texture-2",
  "ugly",
  "shadow",
  "waves",
  "yellow",
  "vintage",
  "green",
  "3d-classic",
  "3d-gold",
  "retro"
];

class GridSelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        display: block;
        height: 100%;
      }

      .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        gap: 4px;
      }

      .container > word-art {
        border-top: 2px solid #2a292a;
        border-left: 2px solid #2a292a;
        border-right: 2px solid #ddd;
        border-bottom: 2px solid #ddd;
        background: white;
      }

      .container > word-art:hover {
        border: 2px solid #000;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  fillItems() {
    return TYPES.map(type => /* html */`<word-art type="${type}" title="${type}"></word-art>`).join("");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GridSelect.styles}</style>
    <div class="container">
      ${this.fillItems()}
    </div>`;
  }
}

customElements.define("grid-select", GridSelect);
