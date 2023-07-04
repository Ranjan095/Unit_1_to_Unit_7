import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {

 

let count=useSelector((store)=>store.counter.counter)
// console.log(count)

  return <div data-testid="counterValue" >
    <h1>{count}</h1>
  </div>;
};

export default CounterValue;
