/** @format */

import React from "react";
import { ERROR, REQUEST, SUCCESS } from "./type";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST: {
      return { ...state, isLoading: true };
    }
    case SUCCESS: {
      return { ...state, isLoading: false, isSuccess: true, token: payload };
    }
    case ERROR: {
      return { ...state, isLoading: false, isSuccess: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
