import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Alpha from "./views/projectalpha/Alpha";
import Gamma from "./views/projectgamma/Gamma";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Esto está roto</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
