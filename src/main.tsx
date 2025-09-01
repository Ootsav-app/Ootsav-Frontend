import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    'Root element not found. Make sure you have a div with id="root" in your HTML.'
  );
}

createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
