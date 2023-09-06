import React from "react";
import ReactDOM from "react-dom/client";
import { CampusProvider } from "./context/CampusContext";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CampusProvider>
        <App />
      </CampusProvider>
    </BrowserRouter>
  </React.StrictMode>
);
