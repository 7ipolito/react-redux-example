import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";

import Dashboard from "./pages/Dashboard";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Dashboard />
  </Provider>
);
