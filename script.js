// Correcto: clase ".sidebar" bien escrita y vinculada al evento de un botón
const sidebar = document.querySelector('.sidebar');
const toggleMenuBtn = document.getElementById('toggle-menu-btn'); // Asegúrate de asignar este ID a un botón de tu HTML

if (toggleMenuBtn && sidebar) {
  toggleMenuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
  });
}

// Lógica para la instalación de la PWA
let deferredPrompt;
const installBtn = document.getElementById('install-btn');

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene que Chrome muestre el banner por defecto
  e.preventDefault();
  // Guarda el evento para ejecutarlo después
  deferredPrompt = e;
  // Muestra el botón de instalación
  if (installBtn) {
    installBtn.style.display = 'block';
  }
});

if (installBtn) {
  installBtn.addEventListener('click', () => {
    if (deferredPrompt) {
      // Muestra el cuadro de diálogo de instalación de Android
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('El usuario aceptó instalar la PWA');
        }
        deferredPrompt = null;
        installBtn.style.display = 'none';
      });
    }
  });
}