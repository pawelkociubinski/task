/* @flow */
// Dependencies
import { createSelector } from "reselect";
import { join, map, reduce } from "lodash";
// Types
import type { State } from "../types/models";

export const getTargets = (state: State): Array<string> => state.appReducer.targets;
export const getCheck = (state: State): string => state.appReducer.check;
export const getDateFrom = (state: State): string => state.appReducer.dateFrom;
export const getDateTo = (state: State): string => state.appReducer.dateTo;
export const getSourceAmount = (state: State): string => state.appReducer.amount;

export const getLatest = (state: State):any => state.latestReducer.latest;
export const getHistoricalFrom = (state: State): any => state.historicalReducer.historicalFrom;
export const getHistoricalTo = (state: State): any => state.historicalReducer.historicalTo;

const mapper = (obj, sourceAmount) => map(obj, (value, key) => ({
  value: (value * sourceAmount).toFixed(2),
  key: key,
}));

export const targetsSelector = createSelector(
  getTargets,
  (targets) => join(targets, ", "),
);

export const symbolsSelector = createSelector(
  getTargets,
  (targets) => join(targets, ","),
);

export const currenciesProcessedSelector = createSelector(
  [getSourceAmount, getLatest],
  (sourceAmount, latest) =>
    latest
      ? mapper(latest.rates, sourceAmount)
      : []
);

export const fromProcessedSelector = createSelector(
  [getSourceAmount, getHistoricalFrom],
  (sourceAmount, historicalFrom) =>
    historicalFrom
      ? mapper(historicalFrom.rates, sourceAmount)
      : []
);

export const toProcessedSelector = createSelector(
  [getSourceAmount, getHistoricalTo],
  (sourceAmount, historicalTo) =>
    historicalTo
      ? mapper(historicalTo.rates, sourceAmount)
      : []
);

export const fluctuationSelector = createSelector(
  [getHistoricalFrom, getHistoricalTo],
  (historicalFrom, historicalTo) =>
    historicalFrom && historicalTo
      ? map(historicalTo.rates, (to, key) => {
        const from = historicalFrom.rates[key];
        return {
          key: key,
          fluctuation: (to - from).toFixed(6)
        }
      })
      : []
)
