/** @format */

import React, { forwardRef } from "react";
import PropTypes from "prop-types";
const Pin = forwardRef(({ maxChar, handlechange, i ,forBackSpace},ref) => {
  // console.log(inputRef)

let handleKeyUp=(e)=>{
    if(e.keyCode==8){
        forBackSpace(e)
    }else{
        handlechange(e)
    }
}

  return (
    <div>
      <input
        maxLength={maxChar}
        // onChange={handlechange}
        onKeyUp={handleKeyUp}
        ref={ref}
      />
    </div>
  );
});
Pin.propTypes={
    maxChar:PropTypes.number.isRequired
}

export default Pin;
