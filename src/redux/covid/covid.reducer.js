import { CovidActionTypes } from "./covid.types";

const INITIAL_STATE = {
  data: {},
  country: "",
};

const covidReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CovidActionTypes.SET_DATA_BY_COUNTRY:
      return {
        ...state,
        data: action.payload,
      };
    case CovidActionTypes.SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default covidReducer;
