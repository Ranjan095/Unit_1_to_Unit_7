/** @format */

import React, { useEffect, useRef, useState } from "react";
import Pin from "./Pin";
import PropTypes from "prop-types";

const PinTab = ({ length, maxChar, setOtp }) => {
  let [inputLength] = useState(new Array(length).fill(0));
  let [inputValue] = useState(new Array(length).fill(""));

  let inputRef = useRef([]);
  useEffect(() => {
    inputRef.current[0].focus()
    // console.log(inputLength);
  },[   ]);
  let handlechange = (e, i) => {
    if (i < length - 1 && inputRef.current[i].value.length == maxChar) {
      inputRef.current[i + 1].focus();
    }
    // console.log(e.target.value);
    inputValue[i] = e.target.value;

    setOtp(inputValue.join(""));
  };
  let forBackSpaceHandle=(e,i)=>{
    if(i>0 && inputRef.current[i].value.length==0){
        inputRef.current[i-1].focus()
    }
    inputValue[i]=e.target.value;
    setOtp(inputValue.join(''))
  }
  let handlePaste=(e)=>{
    let data=e.clipboardData.getData('text').split('').filter((_,i)=>i<maxChar*length);
    console.log(data)
  }

  return (
    <div onPaste={handlePaste}>
      
      <div className="PinTab">
        {inputLength.map((ele, i) => (
          <Pin
            key={i}
            maxChar={maxChar}
            i={i}
            handlechange={(e) => handlechange(e, i)}
            ref={(ele) => {
                inputRef.current[i] = ele;
              }}
            forBackSpace={(e) => forBackSpaceHandle(e, i)}
          />
        ))}
      </div>
    </div>
  );
};
PinTab.propTypes ={
    length:PropTypes.number.isRequired,
    maxChar:PropTypes.number.isRequired
  }

export default PinTab;
