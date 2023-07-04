import React from "react";
import { useState } from "react";

export const ProjectRow = ({id,name,assigned_to,status,tech_stack}) => {
  // console.log(data)
  let [show,setShow]=useState(false);
  let [disable,setDisable]=useState(false)

  let handleClick=()=>{
    setShow(true);
    setDisable(true)
  }

  return (
    <>
      <tr>
      <td data-testid="project-id">{/* Show serial number */} {id+1}</td>
      <td data-testid="project-name">{/* Show project name */}{name}</td>
      <td data-testid="project-tech-stack">{/* Show tech stack */}{tech_stack}</td>
      <td data-testid="project-assigned-to">{/* Show assigned to value  */}{assigned_to}</td>
      <td data-testid="project-status">
        {/* Show the current status value */}
        {show ?'reviewed':status!=='pending'? 'completed':'pending'}
      </td>
      <td>
        <button disabled={disable} onClick={handleClick} data-testid="toggle-button">Toggle</button>
      </td>
      </tr>
    </>
  );
};
