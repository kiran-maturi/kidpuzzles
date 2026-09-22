/* Offline cache for the whole app — it is small enough to keep every file.
 *
 * Bump CACHE when anything ships, or tablets will keep serving the old build
 * from disk. Install precaches the shell; activate drops older caches. */

const CACHE = 'kidpuzzles-v2';
const ASSETS = [
  '.',
  'index.html',
  'styles.css',
  'manifest.webmanifest',
  'js/app.js',
  'js/game.js',
  'js/drag.js',
  'js/pieces.js',
  'js/scenes.js',
  'js/audio.js',
  'js/eink.js',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Cache first: on a tablet in a car with no signal, stale-but-working beats
 * a spinner. Fresh files arrive with the next CACHE bump. */
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(
      (hit) =>
        hit ||
        fetch(e.request).then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
          return res;
        })
    )
  );
});
