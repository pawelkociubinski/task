/* @flow */
// Types
import type { CurrencyOption } from "../types/models";
// Constants
import { sourceCurrencies, targetCurrencies } from "../constants/currencies";

const currencyOption = (currency: string): CurrencyOption => ({ value: currency, label: currency });

export const sourceOptions = sourceCurrencies.map(currencyOption);
export const targetOptions = targetCurrencies.map(currencyOption);
