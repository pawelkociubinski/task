// Dependencies
import { takeEvery, call, select } from "redux-saga/effects";
// Custom
import { saveState } from "../helpers/localStorage";

function* persistState() {
  try {
    const state = yield select(store => store);

    yield call(saveState, state);
  } catch (error) {
    throw error;
  }
}

export default function* persistSaga() {
  yield takeEvery("*", persistState);
}
