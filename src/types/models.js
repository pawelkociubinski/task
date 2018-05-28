/* @flow */
export type Check = "latest" | "historical";

export type CurrencyOption = {
  value: string,
  label: string,
}

export type AppModel = {|
  +check: string,
  +amount: string,
  +source: string,
  +targets: Array<string>,
  +dateFrom: string,
  +dateTo: string,
|};

export type LatestModel = {|
  +latest: any,
  +inProgress: boolean,
  +error: boolean,
|}

export type HistoricalModel = {|
  +historicalFrom: any,
  +historicalTo: any,
  +inProgress: boolean,
  +error: boolean,
|}

export type State = {|
  appReducer: AppModel,
  latestReducer: LatestModel,
  historicalReducer: HistoricalModel,
|}
