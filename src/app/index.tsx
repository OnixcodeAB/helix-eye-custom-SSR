import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./containers/App";
import "./assets/favicon.ico";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container);
const initialProps = window.__INITIAL_PROPS__;
/* root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
); */

console.log(initialProps);
hydrateRoot(
  container,
  <BrowserRouter>
    <App {...initialProps} />
  </BrowserRouter>
);
