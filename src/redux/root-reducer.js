import { combineReducers } from "redux";

import covidReducer from "./covid/covid.reducer";

export default combineReducers({
  covid: covidReducer,
});
