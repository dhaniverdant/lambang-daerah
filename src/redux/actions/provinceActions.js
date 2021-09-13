import { ActionTypes } from "../constants/action-types";

export const setProvinces = (provinces) => {
  return {
    type: ActionTypes.SET_PROVINCES,
    payload: provinces,
  };
};

export const selectedProvince = (province) => {
  return {
    type: ActionTypes.SELECTED_PROVINCE,
    payload: province
  };
};
