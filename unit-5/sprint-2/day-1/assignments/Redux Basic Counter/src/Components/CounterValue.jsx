import React, { useState } from "react";
import { store } from "../Redux/store";

const CounterValue = () => {
  let {getState,subscribe}=store;

  const [state, setState ] = useState(100);

//   const [state, setState ] = useState(0);
// const forceUpdate = ( ) => setState(prev=>prev+1)
let forceUpdate=()=>{
  setState(prev=>prev+1)
}

  subscribe(()=>{
    forceUpdate()
  })
 



  console.log(getState())
  // const counter = 0; //get the counter value from the Redux store
  return <div data-testid="counterValue">{getState().counter}</div>;
};

export default CounterValue;
