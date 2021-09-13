import { combineReducers } from "redux";
import { provinceReducer, selectedProvinceReducer } from "./provinceReducer";

const reducers = combineReducers({
  allProvinces: provinceReducer,
  province: selectedProvinceReducer,
});

export default reducers;
