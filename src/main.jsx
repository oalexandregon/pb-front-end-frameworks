import { createRoot } from 'react-dom/client'
import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import Home from "./pages/home/home"
import Details from "./pages/details/detailsLatest"
import  "./global.css";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/detalhes/:id",
        element: <Details/>,
      },
  ]);





createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
  
