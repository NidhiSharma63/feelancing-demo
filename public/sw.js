const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
  "/", // root
  // "/favicon.ico", // icon
  // "/manifest.json", // PWA manifest
  // "/logo192.png", // icons
  // "/logo512.png",
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("Service Worker: Installed");
});

// Activate event
// self.addEventListener("activate", (event) => {
//   console.log("Service Worker: Activated");
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames.map((cache) => {
//           if (cache !== CACHE_NAME) {
//             return caches.delete(cache);
//           }
//         })
//       );
//     })
//   );
// });

// Fetch (cache falling back to network)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Agar cache me mila to wahi return karo
      if (response) {
        return response;
      }
      // Warna network se fetch karke cache karo
      return fetch(event.request).then((res) => {
        if (!res || res.status !== 200 || res.type !== "basic") {
          return res;
        }
        let responseToCache = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return res;
      });
    })
  );
});
