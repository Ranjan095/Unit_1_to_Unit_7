import React from "react";
import { handleAddActionObj } from "../Redux/action";
import { handleReduceActionObj } from "../Redux/action";
import { store } from "../Redux/store";

const CounterButtons = () => {

  let {getState,dispatch}=store;
  console.log(store)

let handleAdd=()=>{
  dispatch(handleReduceActionObj(1))
}
let handleReduce=()=>{
  dispatch(handleAddActionObj(1))

}

  return (
    <div data-testid="counterButtons">
      <button onClick={handleAdd} data-testid="addButton">REDUCE</button>
      <button onClick={handleReduce} data-testid="reduceButton">ADD</button>
    </div>
  );
};

export default CounterButtons;
