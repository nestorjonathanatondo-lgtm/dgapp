self.addEventListener('install', e=>{e.waitUntil(caches.open('dgapp-v4').then(c=>c.addAll(['./','./index.html','./manifest.json'])));self.skipWaiting();});
self.addEventListener('activate', e=>{self.clients.claim();});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{caches.open('dgapp-v4').then(cache=>cache.put(e.request,res.clone()));return res;})).catch(()=>caches.match('./index.html'))));});
