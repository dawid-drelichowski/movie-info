/*
  @todo:
    - cache validation, cache cleaing, available disk space checking
    - worker update testing
    - usage of babel, webpack configuration, migration to async/await
    - tests
 */
import config from 'config.json'

const fetchAndCacheAndRespond = (event, cacheName) => {
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return fetch(event.request)
        .then(response => {
          cache.put(event.request.url, response.clone())
          return response
        })
        .catch(error => {
          return caches.match(event.request) || error
        })
    })
  )
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(config.serviceWorker.caches.assets.name)
      .then(cache => cache.addAll(config.serviceWorker.caches.assets.files))
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (![
          config.serviceWorker.caches.assets.name,
          config.serviceWorker.caches.movies.name,
          config.serviceWorker.caches.images.name
        ].includes(key)) {
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', event => {
  switch (true) {
    case event.request.url.indexOf(config.movieDb.url) > -1:
      fetchAndCacheAndRespond(event, config.serviceWorker.caches.movies.name)
      break
    case event.request.url.indexOf(config.movieDb.images.url) > -1:
      fetchAndCacheAndRespond(event, config.serviceWorker.caches.movies.name)
      break
    default:
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request)
        })
      )
  }
})
