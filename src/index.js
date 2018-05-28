/* @flow */
// Dependencies
import "babel-polyfill";
import "sanitize.css/sanitize.css";
import React from "react";
import { render } from "react-dom";
import invariant from "invariant";
import { Provider } from "react-redux";
// Custom
import App from "./containers/App";
import { store } from "./reducers";

const ROOT_NODE = document.getElementById("rootNode");

invariant(ROOT_NODE, "HTML element dosn't exist");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  ROOT_NODE,
);
