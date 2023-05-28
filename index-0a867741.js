(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.type=this.getAttribute("type"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="container ${this.type}">
      <p>
        <span>W</span><span>o</span><span>r</span><span>d</span><span>A</span><span>r</span><span>t</span>
      </p>
    </div>`}}customElements.define("word-art",a);const d=["outline","spin","arc","double-arc","arc-invert","hollow","classic","texture-1","grayscale","blue-text","gold","purple","double","multicolor","spline","texture-2","ugly","shadow","waves","yellow","vintage","green","3d-classic","3d-gold","retro"];class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}fillItems(){return d.map(r=>`<word-art type="${r}" title="${r}"></word-art>`).join("")}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="container">
      ${this.fillItems()}
    </div>`}}customElements.define("grid-select",s);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --width: 420px;
        --height: 375px;
        --bgcolor: #ece9d8;
        --title-color: #0055e6;
        --title-medium-color: #084bd1;
        --title-dark-color: #003092;
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
          linear-gradient(
            #0058ee 0%,
            #3593ff 4%,
            #288eff 6%,
            #127dff 8%,
            #036ffc 10%,
            #0262ee 14%,
            #0057e5 20%,
            #0054e3 24%,
            #0055eb 56%,
            #005bf5 66%,
            #026afe 76%,
            #0062ef 86%,
            #0052d6 92%,
            #0040ab 94%,
            #003092 100%
          );
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
    `}connectedCallback(){this.titlebar=this.getAttribute("titlebar"),this.type=this.getAttribute("type"),this.okButton=this.hasAttribute("button-ok"),this.cancelButton=this.hasAttribute("button-cancel"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
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
    </div>`}}customElements.define("winxp-window",i);
