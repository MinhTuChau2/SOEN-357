import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // global styles (optional, often includes Tailwind if you use it)
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
