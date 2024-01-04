
import { Navigate, Route, Routes, createBrowserRouter } from "react-router-dom";
import { AboutPage, LoginPage } from "../auth/pages";
import { DCPage, MarvelPage } from "../heroes/pages";

export const AppRouter = createBrowserRouter(
  [
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/about",
      element: <AboutPage/>,
    },
    {
      path: "/dc",
      element: <DCPage/>,
    },

    {
      path: "/marvel",
      element: <MarvelPage/>,
    },
    {
      path: "/",
      element: <Navigate to="/login"/>,
    },
  ]
);
