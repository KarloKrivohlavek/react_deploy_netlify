import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <StoreProvider store={store}>
        <Route path="/" component={App} />
      </StoreProvider>
    </React.StrictMode>
  </Router>
);
