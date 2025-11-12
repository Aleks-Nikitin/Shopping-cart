import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import App from "./components/App/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },

      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
