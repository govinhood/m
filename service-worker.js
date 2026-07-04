
const CACHE_NAME='gfm-v1';
const urlsToCache=['/m/','/m/index.html','/m/style.css','/m/script.js','/m/assets/icon-192.png','/m/assets/icon-512.png','/m/assets/gfmlcct.png','/m/assets/gfmst.png','/m/assets/gfmc.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(urlsToCache)));self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('fetch', event => {});

