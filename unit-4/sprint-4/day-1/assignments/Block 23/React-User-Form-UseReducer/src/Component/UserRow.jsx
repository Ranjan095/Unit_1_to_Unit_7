/** @format */

import React from "react";

const UserRow = ({ sub }) => {
  console.log(sub);

  return sub.length === 0 ? (
    <h2 data-testid="no-user-container">no users found</h2>
  ) : (
    <>
      <table>
        <thead>
          <tr >
            <th>S.no</th>
            <th>User</th>
            <th>Gender</th>
            <th>Role</th>
            <th>marital Statue</th>
          </tr>
        </thead>
        <tbody>
          {sub?.map((ele,i)=>
          <tr>
          <td>{i+1}</td>
          <td>{ele.name}</td>
          <td>{ele.gender}</td>
          <td>{ele.role}</td>
          <td>{ele.maritalStatus?"married":"unmarried"}</td>
        </tr>
          )}
          
        </tbody>
      </table>
    </>
  );
};
export { UserRow };
