/* @flow */
// Types
import type { LatestModel } from "../types/models";
import type { Action } from "../types/actions";
// Actions
import * as actions from "../constants/actions";

export const initialState = {
  latest: null,
  inProgress: false,
  error: false,
};

const latestReducer = (state: LatestModel = initialState, action: any) => {
  switch (action.type) {
    case actions.FETCH_LATEST_DATA_STARTED: {
      return { ...state, inProgress: true };
    }

    case actions.FETCH_LATEST_DATA_SUCCEEDED: {
      return {
        ...state,
        latest: action.payload.latest,
        error: false
      };
    }

    case actions.FETCH_LATEST_DATA_FINISHED: {
      return { ...state, inProgress: false };
    }

    case actions.FETCH_LATEST_DATA_FAILED: {
      return { ...state, error: true };
    }

    default:
      return state;
  }
};

export default latestReducer;
