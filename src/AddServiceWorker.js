export const registerServiceWorker = () => {
  // Service Worker register
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/public/sw.js")
        .then((registration) => {
          console.log("Service Worker registered: ", registration);
        })
        .catch((error) => {
          console.log("Service Worker registration failed: ", error);
        });
    });
  }
};
