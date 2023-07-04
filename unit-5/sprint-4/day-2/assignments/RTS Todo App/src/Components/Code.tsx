import React from "react";
import Add from "./Add";
import Todos from "./Todos";
function Code() {
  return <div style={{display:'flex',justifyContent:"space-between"}}>
    <Add/>
    <Todos/>
  </div>;
}

export default Code;
