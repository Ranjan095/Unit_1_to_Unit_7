/** @format */

import React, { useEffect, useReducer, useState } from "react";
import { ProjectList } from "./ProjectList";

const initialState = {
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
};

const reducer = (state, action) => {
  let { type, payload } = action;

  switch (type) {
    case "NAME": {
      return { ...state, name: payload };
    }
    case "TECH_STACK": {
      return { ...state, tech_stack: payload };
    }
    case "ASSIGNED_TO": {
      return { ...state, assigned_to: payload };
    }
    case "STATUS": {
      return { ...state, status: payload };
    }
    case "RESET": {
      return state= initialState;
    }
    default: {
      return state;
    }
  }
};

export const AddProject = () => {
  let [state, dispatch] = useReducer(reducer, initialState);
  let [data, setData] = useState([]);

  useEffect(() => {
    // console.log(data)
  }, [data]);

  let handleSub = (e) => {
    e.preventDefault();
    setData([...data, state]);

    dispatch({ type: "RESET" });
    // console.log('dja')
  };

  // "NAME"
  // "TECH_STACK"
  // "ASSIGNED_TO"
  // "STATUS"
  // "RESET" - (For resseting the state)

  return (
    <div>
      <h1>Add Project</h1>
      <div className="form-wrapper" data-testid="form-wrapper">
        <form data-testid="form-element" onSubmit={handleSub}>
          <div className="name-wrapper" data-testid="name-wrapper">
            <label>Project Name</label>
            <input
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "NAME", payload: e.target.value })
              }
              name="name"
            ></input>
            {/* Add Input box here */}
          </div>
          <div className="tech-stack-wrapper" data-testid="tech-stack-wrapper">
            <label>Tech Stack</label>
            <select
              value={state.tech_stack}
              onChange={(e) =>
                dispatch({ type: "TECH_STACK", payload: e.target.value })
              }
              data-testid="tech-stack-select"
              name="tech_stack"
            >
              <option value="react">React</option>
              <option value="node">Node</option>
              <option value="java">Java</option>
              <option value="python">Python</option>
            </select>
            {/* Provide select tag with name attribute `name="tech_stack"` */}
            {/* This Select Tag will have `data-testid="tech-stack-select` */}
          </div>
          <div
            className="assigned-to-wrapper"
            data-testid="assigned-to-wrapper"
          >
            <label>Assignmed to</label>
            <select
              value={state.assigned_to}
              onChange={(e) =>
                dispatch({ type: "ASSIGNED_TO", payload: e.target.value })
              }
              name="assigned_to"
              data-testid="assigned-to-select"
            >
              <option value="nrupul">Nrupul</option>
              <option value="albert">Albert</option>
              <option value="aman">Aman</option>
            </select>
            {/* Provide select tag with name attribute `name="assigned_to"` */}
            {/* This Select Tag will have `data-testid="assigned-to-select` */}
          </div>
          <div
            className="current-status-wrapper"
            data-testid="current-status-wrapper"
          >
            <label>Current Status</label>
            <input
              value={state.status}
              onChange={(e) =>
                dispatch({ type: "STATUS", payload: e.target.checked })
              }
              type="checkbox"
              name="status"
            ></input>
            {/* Provide checkbox  with name attribute `name="status"` */}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <h1>Project List</h1>
      {/* Show the project list here using `ProjectList` component */}
      <ProjectList data={data} />
    </div>
  );
};

export { initialState, reducer };
