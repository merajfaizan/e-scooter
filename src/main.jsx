import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main className="max-w-screen-2xl mx-auto box-border">
      <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);
