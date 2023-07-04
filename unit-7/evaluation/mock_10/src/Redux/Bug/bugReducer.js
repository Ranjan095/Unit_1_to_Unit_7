/** @format */

import React from "react";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "./bugType";
let initialState = {
  criticalSeverity: [],
  majorSeverity: [],
  mediumSeverity: [],
  lowSeverity: [],
};

export const bugReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CRITICAL: {
      return {
        ...state,
        criticalSeverity: [...state.criticalSeverity, payload],
      };
    }
    case MAJOR: {
      return {
        ...state,
        majorSeverity: [...state.majorSeverity, payload],
      };
    }
    case MEDIUM: {
      return {
        ...state,
        mediumSeverity: [...state.mediumSeverity, payload],
      };
    }
    case LOW: {
      return {
        ...state,
        lowSeverity: [...state.lowSeverity, payload],
      };
    }

    default: {
      return state;
    }
  }
};
