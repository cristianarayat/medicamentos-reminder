self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('medicamentos-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './personas-inclusivas.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
