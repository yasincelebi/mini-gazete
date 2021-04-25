import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NewsProvider } from "./context/NewsContext";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <NewsProvider>
    <App />
  </NewsProvider>,
  document.getElementById("root")
);
