// sw.js - Service Worker básico para cumplir con los requisitos de la PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
// Cambia el número de versión (ej. de v1 a v2)
const CACHE_NAME = 'cyber-app-v2';