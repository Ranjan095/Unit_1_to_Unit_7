/** @format */

import React from "react";
import { ProjectRow } from "./ProjectRow";

export const ProjectList = ({ data }) => {
  return data.length==0 ? <h2 data-testid="no-project-container">No Project Found</h2> : (
    <div className="project-list-wrapper">
      <table data-testid="project-container">
        {/* Add table head  */}
        {/* Map through the list and use `ProjectRow` Component  */}
        
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Tech Stack</th>
              <th>Assigned To</th>
              <th>Current Status</th>
              <th>Toggle</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
             {data.map((ele,i)=><ProjectRow key={i} id={i} {...ele}/>)}
            {/* </tr> */}
          </tbody>
        
      </table>
    </div>
  );
};
