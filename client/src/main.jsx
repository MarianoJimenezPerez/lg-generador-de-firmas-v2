import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import ErrorPage from "./pages/Error";
import Sign from "./pages/Sign";
import Steps from "./pages/Steps";
import { UserProvider } from "./reducers/userReducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/steps",
    element: <Steps />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
