import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from "./App";
import store from "./lib/Store";
import { Provider } from "react-redux";
//import "./tailwind.css";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
