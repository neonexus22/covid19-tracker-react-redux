import { createSelector } from "reselect";

const selectCovidState = (state) => state.covid;

export const selectCovidData = createSelector(
  [selectCovidState],
  (covidData) => covidData.data
);

export const selectCountry = createSelector(
  [selectCovidState],
  (covidData) => covidData.country
);
