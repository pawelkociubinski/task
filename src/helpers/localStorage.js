/* @flow */
import type { State } from "../types/models";

export const saveState = (state: State) =>
  window.localStorage.setItem("persisted-state", JSON.stringify(state));

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("persisted-state");

    if (serializedState) {
      return JSON.parse(serializedState);
    }
    return {};
  } catch (error) {
    return error;
  }
};
