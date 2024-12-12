import { createRoot } from 'react-dom/client'
import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import Home from "./pages/home/home"
import Details from "./pages/details/details"
import "./global.css";
import Favorites from "./pages/favorites/favorites"
import TvSeries from './pages/tvShows/tvShows';
import Movies from "./pages/movies/movies"
import SignUp from './pages/signUp/signUp';
import SignIn from './pages/signIn/signIn';

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
    element: <Movies />,
  },
  {
    path: "/tv/",
    element: <TvSeries />,
  },
  {
    path: "/signUp/",
    element: <SignUp />,
  },
  {
    path: "/signIn/",
    element: <SignIn />,
  },
]);





createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
)

