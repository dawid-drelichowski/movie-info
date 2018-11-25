const cacheConfig = {
  name: 'movie-info',
  files: [
    '/index.html',
    '/css/main.css',
    '/js/main.js'
  ]
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheConfig.name).then(cache => cache.addAll(cacheConfig.files))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
