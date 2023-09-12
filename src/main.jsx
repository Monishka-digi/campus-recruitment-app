import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { CampusProvider } from "./context/CampusContext";
import { router } from "./routes";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CampusProvider>
      <RouterProvider router={router} />
    </CampusProvider>
  </React.StrictMode>
);
