/* @flow */
// Custom
import { yesterday, today } from "../helpers/date";
// Types
import type { AppModel } from "../types/models";
import type { Action } from "../types/actions";
// Actions
import * as actions from "../constants/actions";

export const initialState = {
  check: "latest",
  amount: "1",
  source: "EUR",
  targets: ["PLN"],
  dateFrom: yesterday,
  dateTo: today,
};

const appReducer = (state: AppModel = initialState, action: any) => {
  switch (action.type) {
    case actions.CHANGE_CHECK: {
      return { ...state, check: action.payload.check };
    }

    case actions.CHANGE_AMOUNT: {
      return { ...state, amount: action.payload.value };
    }

    case actions.CHOOSE_TARGET: {
      return { ...state, targets: [...state.targets, action.payload.currency] };
    }

    case actions.REMOVE_TARGET: {
      return {
        ...state,
        targets: state.targets.filter((currency) =>
          currency !== action.payload.currency)
      };
    }

    case actions.CHOOSE_SOURCE: {
      return { ...state, source: action.payload.source };
    }

    case actions.CHANGE_DATE: {
      return { ...state, [action.payload.name]: action.payload.value };
    }

    default:
      return state;
  }
};

export default appReducer;
