/**
 * Crea un elemento HTML para marcadores personalizados con estilo Neón
 * @param {string} iconClass - Clase de FontAwesome (ej. "fa-gas-pump")
 * @param {string} colorVariable - Variable CSS del color neón (ej. "--neon-yellow")
 * @returns {HTMLElement}
 */
function createCyberMarker(iconClass, colorVariable) {
  const container = document.createElement("div");
  container.className = "cyber-map-marker";
  container.style.cssText = `
    color: var(${colorVariable});
    filter: drop-shadow(0 0 8px var(${colorVariable}));
    font-size: 1.4rem;
    background: rgba(3, 3, 8, 0.85);
    border: 1px solid var(${colorVariable});
    padding: 6px;
    clip-path: polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  container.innerHTML = `<i class="${iconClass}"></i>`;
  return container;
}