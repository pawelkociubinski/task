// Dependencies
import { put, takeLatest, takeEvery, call, select } from "redux-saga/effects";
// Selectors
import { getCheck, symbolsSelector, getDateFrom, getDateTo } from "../selectors";
// Actions
import * as actions from "../constants/actions";
// Helpers
import { fixer } from "../helpers/api";

function* fetchLatestData() {
  try {
    yield put({ type: actions.FETCH_LATEST_DATA_STARTED });

    const symbols = yield select(symbolsSelector);

    const latest = yield call(fixer.getLatest, symbols);

    yield put({
      type: actions.FETCH_LATEST_DATA_SUCCEEDED,
      payload: { latest },
    });

    yield put({ type: actions.FETCH_LATEST_DATA_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_LATEST_DATA_FAILED });
    yield put({ type: actions.FETCH_LATEST_DATA_FINISHED });
  }
}

function* fetchHistoricalData() {
  try {
    yield put({ type: actions.FETCH_HISTORICAL_DATA_STARTED });

    const symbols = yield select(symbolsSelector);
    const fromDate = yield select(getDateFrom);
    const toDate = yield select(getDateTo);

    const [historicalFrom, historicalTo] =
      yield call(fixer.getHistorical, { symbols, fromDate, toDate });

    yield put({
      type: actions.FETCH_HISTORICAL_DATA_SUCCEEDED,
      payload: { historicalFrom, historicalTo },
    });

    yield put({ type: actions.FETCH_HISTORICAL_DATA_FINISHED });
  } catch (error) {
    yield put({ type: actions.FETCH_HISTORICAL_DATA_FAILED });
    yield put({ type: actions.FETCH_HISTORICAL_DATA_FINISHED });
  }
}

function* fetchData() {
  const check = yield select(getCheck);

  check === "latest"
    ? yield call(fetchLatestData)
    : yield call(fetchHistoricalData)
}

function* handleCheck(action) {
  if (action.payload.check === "historical") {
    yield put({
      type: actions.CHANGE_AMOUNT,
      payload: { value: "1" },
    });
  }

  yield put({
    type: actions.CHANGE_CHECK,
    payload: { check: action.payload.check },
  });
}

export default function* persistSaga() {
  yield takeLatest(actions.SUBMIT_REQUESTED, fetchData);
  yield takeEvery(actions.CHANGE_CHECK_REQUESTED, handleCheck);
}
