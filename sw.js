const CACHE_NAME = "emom-pwa-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",

  "./russian_swing.mp4",
  "./alt_bent_rows.mp4",
  "./goblet_lunges.mp4",
  "./goblet_press.mp4",
  "./sumo_high_pulls.mp4",
  "./alt_swings.mp4",
  "./halos.mp4",
  "./american_swings.mp4",
  "./alt_high_pulls.mp4",
  "./rest.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});