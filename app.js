async function cargarModulos() {
    const elementos = document.querySelectorAll("[data-include]");
    for (const el of elementos) {
        const archivo = el.getAttribute("data-include");
        try {
            const respuesta = await fetch(archivo);
            if (respuesta.ok) {
                el.outerHTML = await respuesta.text();
            } else {
                el.innerHTML = "<!-- error al cargar el modulo -->";
            }
        } catch (error) {
            console.error(`error cargando &{archivo}`, error);
        }
    }
}
document.addEventListener("DOMContentLoaded", cargarModulos);
