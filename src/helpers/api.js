/* @flow */
import axios from "axios";
import queryString from "query-string";

type Historical = { symbols: string, fromDate: string, toDate: string }

const fixerAPI = axios.create({
  baseURL: "http://data.fixer.io/api/",
  params: {
    access_key: process.env.ACCESS_KEY,
  },
});

export const fixer = {
  getHistorical({ symbols, fromDate, toDate }: Historical) {
    return axios.all([
      fixerAPI.get(`/${fromDate}`, { params: { symbols: symbols } }),
      fixerAPI.get(`/${toDate}`, { params: { symbols: symbols } }),
    ]).then(axios.spread(((historicalFrom, historicalTo) =>
      [historicalFrom.data, historicalTo.data]
    )));
  },
  getLatest(symbols: string) {
    return fixerAPI.get("/latest", { params: { symbols: symbols } })
      .then((response) => response.data);
  },
};
