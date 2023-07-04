/** @format */

import React, { useEffect, useRef, useState } from "react";
import { Pin } from "./Pin";
import PropTypes from "prop-types";

export const PinTab = ({ length, maxChar, setOtp }) => {
  let inputRef = useRef([]);
  let [arr] = useState(new Array(length).fill(1));
  let [inputVal] = useState(new Array(length).fill(""));

  // console.log(arr);
  let changeInputBox = (e, i) => {
    if (i < length - 1 && inputRef.current[i].value.length == maxChar) {
      inputRef.current[i + 1].focus();
    }
inputVal[i]=e.target.value;
setOtp(inputVal.join(''))
    // console.log(e.target.value);
    // console.log(i);
    console.log(inputVal);
  };

let handleBackSpace=(e,i)=>{
  console.log('backspace')
  if(i>0 && inputRef.current[i].value.length==0){
    inputRef.current[i-1].focus()
  }
  inputVal[i]=e.target.value;
  setOtp(inputVal.join(''))
}

  useEffect(() => {
    inputRef.current[0].focus()
    console.log(inputRef);
  }, []);

  return (
    <div data-testid="pin-tab">
      {/* Add Pin component here  */}
      {arr.map((ele, i) => (
        <Pin
          key={i}
          i={i}
          ref={(ele) => (inputRef.current[i] = ele)}
          handleChange={(e) => changeInputBox(e, i)}
          forBackSpace={(e)=>handleBackSpace(e,i)}
          maxChar={maxChar}
        />
      ))}
    </div>
  );
};

PinTab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};
// Check length and maxChar props here
