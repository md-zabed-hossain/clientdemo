import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterContextProvider } from "./components/filter/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>
);
