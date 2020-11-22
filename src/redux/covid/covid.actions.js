import { CovidActionTypes } from "./covid.types";

export const setDataByCountry = (data) => ({
  type: CovidActionTypes.SET_DATA_BY_COUNTRY,
  payload: data,
});

export const setCountry = (country) => ({
  type: CovidActionTypes.SET_COUNTRY,
  payload: country,
});
