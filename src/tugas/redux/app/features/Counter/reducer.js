import * as constant from "./constant";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.INC:
      return {
        ...state,
        count: state.count + action.value,
      };

    case constant.DEC:
      return {
        ...state,
        count: state.count - action.value,
      };

    default:
      return state;
  }
};

export default countReducer;
