/* @flow */
// Types
import type { Check } from "../types/models";
import type {
  ChangeAmountEvent, ChangeCheckEvent,
  ChooseTargetEvent, ChooseSourceEvent,
  SubmitRequestedEvent, ChangeCheckRequestedEvent,
  RemoveTargetEvent, ChangeDateEvent } from "../types/actions";

import * as actions from "../constants/actions";

export const changeAmount = (value: string): ChangeAmountEvent => ({
  type: actions.CHANGE_AMOUNT,
  payload: { value },
});

export const changeCheck = (check: Check): ChangeCheckRequestedEvent => ({
  type: actions.CHANGE_CHECK_REQUESTED,
  payload: { check },
});

export const chooseTarget = (currency: string): ChooseTargetEvent => ({
  type: actions.CHOOSE_TARGET,
  payload: { currency }
});

export const chooseSource = (source: string): ChooseSourceEvent => ({
  type: actions.CHOOSE_SOURCE,
  payload: { source }
});

export const submit = (): SubmitRequestedEvent => ({
  type: actions.SUBMIT_REQUESTED,
});

export const removeTarget = (currency: string): RemoveTargetEvent => ({
  type: actions.REMOVE_TARGET,
  payload: { currency }
});

export const changeDate = (name: string, value: string): ChangeDateEvent => ({
  type: actions.CHANGE_DATE,
  payload: { name, value }
});
