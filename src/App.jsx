import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import React from "react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default router;
