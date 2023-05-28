import "./GridSelect.js";

class WinXPWindow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 420px;
        --height: 375px;
        --bgcolor: #ece9d8;
        --title-color: #0055e6;
        --title-medium-color: #084bd1;
        --title-dark-color: #0e43ab;
        --title-light-color: #196dce;
        --offset: 0.5rem;
        --serif-font: "MS Serif", serif;
        --sans-font: "MS Sans", sans-serif;

        display: flex;
        flex-direction: column;
        width: var(--width);
        filter: drop-shadow(2px 2px 5px #0008);
      }

      .window {
        width: var(--width);
        height: var(--height);
        background: var(--bgcolor);
        border: 4px solid var(--title-dark-color);
        border-top-width: 2px;
        box-sizing: border-box;
        border-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .title-bar {
        height: 32px;
        background-color: var(--title-color);
        border-radius: 10px 10px 0 0;
        background-image:
          linear-gradient(to right, #0003, transparent 5% 95%, #0003),
          url("images/title-bar.png");
        background-size: contain;

        display: flex;
        align-items: center;
        padding: 0.25rem var(--offset);
      }

      .title-bar .title {
        color: #fff;
        font-family: var(--serif-font);
        text-shadow: 1px 1px 2px #0009;
        font-weight: bold;
      }

      header .buttons {
        display: flex;
        margin-left: auto;
        gap: 3px;
      }

      header .button {
        --size: 21px;
        --color: var(--title-dark-color);

        width: var(--size);
        height: var(--size);
        border: 1px solid #fff;
        border-radius: 4px;
        color: #fff;
        font-family: var(--sans-font);
        font-weight: bold;

        display: grid;
        place-items: center;
        padding-top: 0.1rem;

        box-shadow:
          2px 2px 6px var(--color) inset,
          -2px -2px 6px var(--color) inset,
          0 0 2px 1px #0006;
        text-shadow: 1px 1px 2px #0008;
      }

      header .button:hover {
        cursor: pointer;
        filter: brightness(120%);
      }

      header .help {
        background: linear-gradient(#8faffa, #2678f8);
      }

      header .close {
        --color: #ae320c;

        background: linear-gradient(#eca895, #e24e1e);
      }

      .content {
        padding: 0 var(--offset);
        font-family: var(--sans-font);
        font-size: 12px;
        letter-spacing: -0.25px;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .content em {
        font-style: normal;
        text-decoration: underline;
      }

      footer {
        display: flex;
        justify-content: end;
        gap: 6px;
        padding: var(--offset);
        margin-top: 0.75rem;
      }

      footer button {
        background: var(--bgcolor);
        min-width: 72px;
        min-height: 22px;
        font-family: var(--sans-font);
        font-size: 0.75rem;
        color: #000;
        border: 2px outset #fff;
        display: grid;
        place-items: center;
        padding: 0.2rem;
        border-radius: 1px;
        box-shadow: 0 0 3px #0002 inset;
      }

      footer button:active {
        outline: 1px solid black;
        border: 2px inset #fff;
      }
    `;
  }

  connectedCallback() {
    this.titlebar = this.getAttribute("titlebar");
    this.type = this.getAttribute("type");
    this.okButton = this.hasAttribute("button-ok");
    this.cancelButton = this.hasAttribute("button-cancel");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${WinXPWindow.styles}</style>
    <header class="title-bar">
      <div class="title">${this.titlebar}</div>
      <div class="buttons">
        <div class="help button">?</div>
        <div class="close button">⨉</div>
      </div>
    </header>
    <div class="window">
      <div class="content">
        <p>Select a <em>W</em>ordArt style:</p>
        <grid-select></grid-select>
      </div>

      <footer>
        <button>OK</button>
        <button>Cancel</button>
      </footer>
    </div>`;
  }
}

customElements.define("winxp-window", WinXPWindow);
