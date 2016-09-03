/**
 * The name of the current cache
 * @type {String}
 */
const CACHE_NAME = 'v1Sf';

/**
 * Files to cache
 * @type {Array}
 */
const fileCache = [
  '/index.html',
  '/dist/bundle.js',
  '/src/lib/jquery-2.1.3.min.js',
  '/src/styles.css'
];

this.oninstall = (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(fileCache);
      })
  );
};

this.onfetch = (event) => {
  const response =
    caches.match(event.request)
      .catch(() =>
        fetch(event.request)
          .then((res) => {
            const r = res.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, r);
            });
          return res;
          }))
      .then((res) => res);

  event.respondWith(response);
};
