import { combineReducers } from "redux";
import { provinceReducer } from "./provinceReducer";

const reducers = combineReducers({
  allProvinces: provinceReducer,
});

export default reducers;
