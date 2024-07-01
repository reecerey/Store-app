// Importing important items like Router, Provider, store, library... ect. To be used on all pages in the project
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Adding the shopping cart icon from font awesome
library.add(faShoppingCart);

ReactDOM.render(
  // Wrapping the App in Router and Provider
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
