const CACHE_NAME = "emom-pwa-v2";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",

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

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
