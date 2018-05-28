/* @flow */
// Dependencies
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// Custom
import rootSaga from "../sagas";
import reducers from "./reducers";
import { loadState } from "../helpers/localStorage";

const initialState = loadState();
const saga = createSagaMiddleware();
const enhancers = [applyMiddleware(saga)];
const composeEnhancers = process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

export const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers),
);

saga.run(rootSaga);
