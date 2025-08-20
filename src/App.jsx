import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Solutions from "./pages/Solution";
import React from "react";
import Layout from "./component/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/",
    element: <Layout />, 
    children: [
      {
        path: "solution",
        element: <Solutions/>,
      },
      {
        path: "product",
        element: <Product/>,
      },
    ],
  },
]);


export default router;
