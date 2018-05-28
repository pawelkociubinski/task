import { format, subDays } from "date-fns/esm/fp";
import flow from "lodash/fp/flow";

export const date = new Date();
export const subOneDay = subDays(1);
export const todayFn = format("YYYY-MM-d");
export const yesterdayFn = flow(subOneDay, todayFn);

export const today = todayFn(date);
export const yesterday = yesterdayFn(date);
