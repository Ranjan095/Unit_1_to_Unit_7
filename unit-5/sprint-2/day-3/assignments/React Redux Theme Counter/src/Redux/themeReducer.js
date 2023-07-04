/** @format */

//Complete the reducer function logic inside the curly braces {}
// the theme initstate shouldbe light

import { CHANGE_THEME } from "./actionTypes";

let initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_THEME: {
      return { ...state, theme: payload };
    }
    default: {
      return state;
    }
  }
};

export { themeReducer };
