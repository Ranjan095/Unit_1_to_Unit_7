/** @format */

import React, { useState } from "react";

const useMyReducer = (reducer, init) => {
  let [state, setState] = useState(init);

  let dispatch = (action) => {
    let newState = reducer(state, action);
    setState(newState);
  };

  return [state, dispatch];
};

export default useMyReducer;
