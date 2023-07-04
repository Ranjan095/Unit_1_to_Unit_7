import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  let dispatch=useDispatch()



  return (
    <div data-testid="counterButtons">
      <button onClick={()=>dispatch(handleAdd(1))} data-testid="addButton">ADD</button>
      <button onClick={()=>dispatch(handleReduce(1))} data-testid="reduceButton">REDUCE</button>
    </div>
  );
};

export default CounterButtons;
