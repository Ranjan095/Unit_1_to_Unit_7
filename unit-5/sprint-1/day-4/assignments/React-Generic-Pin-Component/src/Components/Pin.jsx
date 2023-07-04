/** @format */

import React from "react";
import PropTypes from "prop-types";
import { forwardRef } from "react";

export const Pin = forwardRef(({ maxChar, handleChange,forBackSpace },ref) => {

let handleKeyUp=(e)=>{
  // console.log(e)
  if(e.keyCode==8){
forBackSpace(e)
  }else{
    handleChange(e)
  }
}

  return (
    <input
     ref={ref}
      // onChange={handleChange}
      onKeyUp={handleKeyUp}
      maxLength={maxChar}
      data-testid="pin-input"
      
    />
  );
});
Pin.propTypes = {
  maxChar: PropTypes.number.isRequired,
};
// Check maxChar prop here
