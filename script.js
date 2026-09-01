// 1. Manejo del Sidebar (Ocultar / Mostrar)
const dashboard = document.querySelector(".dashboard-container");
const toggleMenuBtn = document.getElementById("toggle-menu-btn");

if (toggleMenuBtn && dashboard) {
    toggleMenuBtn.addEventListener("click", () => {
        dashboard.classList.toggle("collapsed");
    });
}

// 2. Lógica para la instalación de la PWA
let deferredPrompt;
const installBtn = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) {
        installBtn.style.display = "inline-block";
    }
});

if (installBtn) {
    installBtn.addEventListener("click", () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("PWA instalada");
                }
                deferredPrompt = null;
                installBtn.style.display = "none";
            });
        }
    });
}