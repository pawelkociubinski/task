/* @flow */
import type { Check } from "./models";

export type ChangeAmountEvent = {|
  type: string,
  payload: {|
    value: string
  |}
|};

export type ChangeCheckEvent = {|
  type: string,
  payload: {|
    check: Check
  |}
|};

export type ChooseTargetEvent = {|
  type: string,
  payload: {|
    currency: string
  |}
|}

export type ChooseSourceEvent = {|
  type: string,
  payload: {|
    source: string
  |}
|}

export type SubmitRequestedEvent = {|
  type: string
|}

export type ChangeCheckRequestedEvent = {|
  type: string,
  payload: {|
    check: string
  |}
|}

export type RemoveTargetEvent = {|
  type: string,
  payload: {|
    currency: string
  |}
|}

export type ChangeDateEvent = {|
  type: string,
  payload: {|
    name: string,
    value: string
  |}
|}

export type Action =
  ChangeAmountEvent
  | ChangeCheckEvent
  | ChangeDateEvent
  | ChooseTargetEvent
  | ChooseSourceEvent
  | RemoveTargetEvent
  | SubmitRequestedEvent
  | ChangeCheckRequestedEvent
