/** @format */

import React, { useState } from "react";
function App() {
  const init: string | null = localStorage.getItem("counter");
  // console.log(init)

  const [counter, setCounter] = useState<number>((init && +init) || 0);

  const handleClick = (val: number) => {
    const total = counter + val;
    localStorage.setItem("counter", JSON.stringify(total));
    setCounter(total);
  };

  return (
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="increment" onClick={() => handleClick(1)}>
        Increment
      </button>
      <button data-testid="decrement" onClick={() => handleClick(-1)}>
        Decrement
      </button>
      <button data-testid="increment5" onClick={() => handleClick(5)}>
        Increment5
      </button>
      <button data-testid="decrement5" onClick={() => handleClick(-5)}>
        Decrement5
      </button>
    </div>
  );
}

export default App;
