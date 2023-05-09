import * as constant from "./constant";

export const increment = (value) => {
  return {
    type: constant.INC,
    value: value,
  };
};

export const decrement = (value) => {
  return {
    type: constant.DEC,
    value: value,
  };
};

export const decrementWithChecking = (value) => {
  return (dispatch, getState) => {
    if (getState().counter.count > 0) dispatch(decrement(value));
  };
};
