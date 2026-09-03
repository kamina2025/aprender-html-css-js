// 1. Manejo del Sidebar (Ocultar / Mostrar mediante el botón de la cabecera)
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
                deferredPrompt = null;
                installBtn.style.display = "none";
            });
        }
    });
}

// 3. Delegación de Eventos Global (Submenús, Pestañas, Modales y Autocierre)
document.addEventListener("click", (e) => {
    // 3a. Manejo de apertura/cierre de submenús
    const btnSubmenu = e.target.closest(".btn-submenu-toggle");
    if (btnSubmenu) {
        e.stopPropagation();
        const parentItem = btnSubmenu.closest(".menu-item-has-submenu");
        if (parentItem) {
            const submenusAbiertos = document.querySelectorAll(".menu-item-has-submenu.open");

            submenusAbiertos.forEach((item) => {
                if (item !== parentItem) {
                    item.classList.remove("open");
                }
            });
            parentItem.classList.toggle("open");
        }
        return; // Detiene la ejecución para no colapsar el sidebar ni cambiar vista
    }

    // 3b. Navegación (Excluye el botón disparador del submenú)
    const btnNav = e.target.closest(".sidebar .nav-btn:not(.btn-submenu-toggle)");

    if (btnNav) {
        const dashboardContainer = document.querySelector(".dashboard-container");

        // Cierra el sidebar automáticamente tras seleccionar una opción final
        if (dashboardContainer) {
            dashboardContainer.classList.add("collapsed");
        }

        const targetId = btnNav.getAttribute("data-target");
        if (!targetId) return;

        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        // Caso A: Abrir Modal
        if (targetElement.classList.contains("modal-overlay")) {
            targetElement.classList.add("activo");
        }
        // Caso B: Cambiar Pestaña
        else if (targetElement.classList.contains("contenedor-pestana")) {
            const pestanas = document.querySelectorAll(".contenedor-pestana");
            const navButtons = document.querySelectorAll(".sidebar .nav-btn");

            pestanas.forEach((p) => p.classList.remove("activa"));
            navButtons.forEach((b) => b.classList.remove("active"));

            targetElement.classList.add("activa");
            btnNav.classList.add("active");
        }
    }

    // 3c. Cerrar Modal al hacer clic en 'X'
    if (e.target.classList.contains("cerrar-modal")) {
        const modalPadre = e.target.closest(".modal-overlay");
        if (modalPadre) modalPadre.classList.remove("activo");
    }

    // 3d. Cerrar Modal al hacer clic fuera del recuadro (Overlay)
    if (e.target.classList.contains("modal-overlay")) {
        e.target.classList.remove("activo");
    }
    // 3e. Control de Tarjetas Interactivas
    const cardBtn = e.target.closest(".card-btn");

    if (cardBtn) {
        const targetId = cardBtn.getAttribute("data-target");

        // CASO A: Si la tarjeta tiene un 'data-target', abre un modal o pestaña
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement && targetElement.classList.contains("modal-overlay")) {
                targetElement.classList.add("activo");
            }
        }
        // CASO B: Si es una tarjeta de selección de Cargar Offline (por su ID)
        else {
            if (cardBtn.id === "btn-cargar-ruta") {
                console.log("[Cargar Offline] Iniciando flujo para RUTA (PDF, TXT, Excel, DB)...");
                // Aquí agregas la lógica o llamada a la función para cargar rutas
            } else if (cardBtn.id === "btn-cargar-paquete") {
                console.log("[Cargar Offline] Iniciando flujo para PAQUETE (Escáner IA / Foto / Manual)...");
                // Aquí agregas la lógica o apertura de la cámara/formulario de paquetes
            }
        }
    }
});
