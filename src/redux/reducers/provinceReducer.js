import { ActionTypes } from "../constants/action-types";

const initialState = {
  provinces: [],
};

export const provinceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PROVINCES:
      return { ...state, provinces: payload };
    default:
      return state;
  }
};

export const selectedProvinceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PROVINCE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
