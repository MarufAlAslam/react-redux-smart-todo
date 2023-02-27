import { STATUSCHANGED, COLORCHANGED } from "./ActionTypes";

// action for changing status
export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

// action for changing color
export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
