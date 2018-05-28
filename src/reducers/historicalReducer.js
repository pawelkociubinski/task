/* @flow */
// Types
import type { HistoricalModel } from "../types/models";
import type { Action } from "../types/actions";
// Actions
import * as actions from "../constants/actions";

export const initialState = {
  historicalFrom: null,
  historicalTo: null,
  inProgress: false,
  error: false,
};

const historicalReducer = (state: HistoricalModel = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_HISTORICAL_DATA_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_HISTORICAL_DATA_SUCCEEDED: {
      return {
        ...state,
        historicalFrom: action.payload.historicalFrom,
        historicalTo: action.payload.historicalTo
      };
    }

    case actions.FETCH_HISTORICAL_DATA_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_HISTORICAL_DATA_FAILED: {
      return { ...state, error: true };
    }

    default:
      return state;
  }
};

export default historicalReducer;
