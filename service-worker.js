const CACHE_NAME = "facturacion-cache-v1";
const archivosParaCachear = [
  "/",
  "index.html",
  "public/css/estilos.css",
  "public/js/clientes.js",
  "public/js/productos.js",
  "public/js/factura.js",
  "manifest.json",
];

self.addEventListener('install', event => {
  console.log('Instalando SW...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Archivos cacheados');
      return cache.addAll(archivosParaCachear);
    })
  );
});


self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});