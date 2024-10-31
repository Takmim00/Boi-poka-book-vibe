import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/ErrorPage/Errorpage";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard";
import BookDetail from "./Components/BookDetail/BookDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: 'book/:bookId',
        element:<BookDetail></BookDetail>
      },
      {
        path: 'dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
