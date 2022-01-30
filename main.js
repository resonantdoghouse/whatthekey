// whats the key code
import "./style.css";

const keysPressed = [];
let keyCode = "";

/**
 * render
 */
function render() {
  document.querySelector("#app").innerHTML = `
    <h1 class="heading-1">Whats The Key Code</h1>
    <p class="key-code">${keyCode || "keyCode"}</p>
    <h2 class="heading-2">Keys Pressed</h2>
    <p class="keys-pressed">${JSON.stringify(keysPressed)}</p>
  `;
}

document.addEventListener("keydown", (e) => {
  keyCode = e.code;
  keysPressed.push(keyCode);
  render();
});

render();
