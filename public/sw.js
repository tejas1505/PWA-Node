self.addEventListener('install', e =>{
    console.log("Installed!")
    e.waitUntil(
        caches.open("pwa-cache").then(cache =>{
            return cache.addAll(['/','/devices', '/images/db_144.png','/manifest.webmanifest','/servicew.js'])
        })
    )
})


self.addEventListener('fetch', e => {
    console.log(`Initiating fetch request for: ${e.request.url} `)
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
})