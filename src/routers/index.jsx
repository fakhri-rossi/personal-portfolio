import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Projects from "../pages/projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);
