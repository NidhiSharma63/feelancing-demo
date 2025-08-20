import { createRoot } from "react-dom/client";
import router from "./App.jsx";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router";
// import { registerServiceWorker } from "./AddServiceWorker.js";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
// registerServiceWorker()