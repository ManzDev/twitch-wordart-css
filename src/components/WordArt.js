class WordArt extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        overflow: hidden;
      }

      .container {
        color: black;
        display: grid;
        place-items: center;
        font-family: "MS Serif";

        width: 100%;
        height: 100%;
        font-size: 1.2rem;
        position: relative;
        cursor: pointer;
      }

      p {
        margin: 0;
      }

      .outline {
        --size: 1px;

        color: #fff;
        text-shadow:
          calc(-1 * var(--size)) 0 0 #000,
          0 calc(-1 * var(--size)) 0 #000,
          var(--size) 0 0 #000,
          0 var(--size) 0 #000;
      }

      .spin {
        color: #000;
        font-family: "Montserrat";
        font-size: 1.05rem;
        font-weight: 800;
        letter-spacing: -1px;
        transform: rotate(-15deg) skewX(-10deg);
      }

      .arc {
        color: #000;
        font-family: "Montserrat";
        font-size: 1.05rem;
        font-weight: 800;
      }

      .arc span {
        display: block;
        position: absolute;
        transform-origin: 50% 100%;
      }

      .arc span:nth-child(1) { transform: rotate(-25deg) translate(-20px, -20px); }
      .arc span:nth-child(2) { transform: rotate(-10deg) translate(-10px, -15px); }
      .arc span:nth-child(3) { transform: rotate(-5deg) translate(-1px, -15px); }
      .arc span:nth-child(4) { transform: rotate(5deg) translate(1px, -15px); }
      .arc span:nth-child(5) { transform: rotate(10deg) translate(10px, -15px); }
      .arc span:nth-child(6) { transform: rotate(25deg) translate(15px, -20px); }
      .arc span:nth-child(7) { transform: rotate(45deg) translate(10px, -25px); }

      .double-arc {
        color: #000;
        font-family: "Montserrat";
        font-size: 1.05rem;
        font-weight: 800;
      }

      .double-arc span {
        display: block;
        position: absolute;
        transform-origin: 50% 100%;
      }

      .double-arc span:nth-child(1) { transform: scaleY(1.9) translate(-200%); }
      .double-arc span:nth-child(2) { transform: scaleY(1.75) translate(-180%, -10%); }
      .double-arc span:nth-child(n+3) { display: none }
    `;
  }

  connectedCallback() {
    this.type = this.getAttribute("type");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${WordArt.styles}</style>
    <div class="container ${this.type}">
      <p>
        <span>W</span><span>o</span><span>r</span><span>d</span><span>A</span><span>r</span><span>t</span>
      </p>
    </div>`;
  }
}

customElements.define("word-art", WordArt);
