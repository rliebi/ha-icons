const LitElement = Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
const html = LitElement.prototype.html;

class LiebiIcons extends LitElement {
  render() {
    return html`
      <ha-iconset-svg name="liebi" size="24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <defs>
            <g id="logo">
              <path d="M2 3h4.5l5.5 13L17.5 3H22L13.2 21h-2.5L2 3z"/>
            </g>
          </defs>
        </svg>
      </ha-iconset-svg>
    `;
  }
}

customElements.define("liebi-icons", LiebiIcons);

const existing = document.querySelector("liebi-icons");
if (!existing) {
  const el = document.createElement("liebi-icons");
  document.body.appendChild(el);
}