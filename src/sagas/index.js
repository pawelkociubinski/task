// Dependencies
import { all, fork } from "redux-saga/effects";
// Sagas
import persistSaga from "./persistSaga";
import appSaga from "./appSaga";

export default function* rootSaga() {
  yield all([
    fork(persistSaga),
    fork(appSaga),
  ]);
}
