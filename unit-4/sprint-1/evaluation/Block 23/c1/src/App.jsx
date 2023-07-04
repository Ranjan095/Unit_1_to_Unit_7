/** @format */

import React, { useEffect, useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let [pri,setPri]=useState('');

let p=(val)=>{
  let c=0;
  for(let i=1; i<=val; i++){
    if(val%i==0){
      c++
    }
  }
  if(c===2){
    setPri('true')
  }else{
    setPri('false')
  }
}

useEffect(()=>{
  p(count)
  console.log(pri)
},[count])


  let handleClick = (val) => {
    setCount(count + val);
  };
  return (
    <div>
      <div>
        <button data-testid="minusonebtn" disabled={count==0} onClick={() => handleClick(-1)}>
          -1
        </button>
        <button data-testid="plusonebtn" onClick={() => handleClick(+1)}>
          +1
        </button>
        <div>
          <button data-testid="resetbtn" onClick={()=>setCount(0)}>Reset Count</button>
        </div>
      </div>
      <span data-testid="counter">{count}</span>
      <div>
        <span data-testid="odd-or-even">{count % 2 == 0 ? "Even" : "Odd"}</span><br></br>
        <span data-testid="is-prime">{pri}</span>
      </div>
    </div>
  );
}

export default App;
