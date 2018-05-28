/* @flow */
// Dependencies
import { combineReducers } from "redux";
// Reducers
import appReducer from "./appReducer";
import latestReducer from "./latestReducer";
import historicalReducer from "./historicalReducer";

export default combineReducers({
  appReducer,
  latestReducer,
  historicalReducer,
});
