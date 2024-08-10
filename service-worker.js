self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('notes-cache').then((cache) => {
            return cache.addAll(['.', 'styles.css', 'app.js', 'icon-192x192.png', 'icon-512x512.png']);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
