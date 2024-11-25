import { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/home/home"
import DetailsLatest from "./pages/details/detailsLatest"
import DetailsPopular from "./pages/details/detailsPopular"
import Details from "./pages/details/details"
import "./global.css";
import Favorites from "./pages/favorites/favorites"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
  {
    path: "/favoritos/",
    element: <Favorites />,
  },
  {
    path: "/filmes/",
    element: <Favorites />,
  },
  {
    path: "/tv/",
    element: <Favorites />,
  },
]);





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)

