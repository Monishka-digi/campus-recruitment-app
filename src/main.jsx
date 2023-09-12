import React from "react";
import ReactDOM from "react-dom/client";
import { CampusProvider } from "./context/CampusContext";
import { RouterProvider } from "react-router-dom";
import { router} from "./routes"
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CampusProvider>
      <RouterProvider router={router} />
    </CampusProvider>
  </React.StrictMode>
);
