import { createRoot } from 'react-dom/client'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/home"
import DetailsLatest from "./pages/details/detailsLatest"
import DetailsPopular from "./pages/details/detailsPopular"
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lancamentos/:id",
    element: <DetailsLatest />,
  },
  {
    path: "/populares/:id",
    element: <DetailsPopular />,
  },
]);





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

