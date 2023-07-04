/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import das from "./das.css";
import { CRITICAL, LOW, MAJOR, MEDIUM } from "../Redux/Bug/bugType";

export const Dashbord = () => {
  let [cri, setCrei] = useState("");
  let [major, setMajor] = useState("");
  let [medium, setMedium] = useState("");
  let [low, setLow] = useState("");

  let { criticalSeverity, majorSeverity, mediumSeverity, lowSeverity } =
    useSelector((store) => store.bugreducer);
  // console.log(criticalSeverity,majorSeverity,mediumSeverity,lowSeverity)

  let dispatch = useDispatch();

  let handleCritical = (e) => {
    e.preventDefault();
    dispatch({ type: CRITICAL, payload: cri });
    setCrei("");
  };
  let handleMajor = (e) => {
    e.preventDefault();
    dispatch({ type: MAJOR, payload: major });
    setMajor("");
  };
  let handleMedium = (e) => {
    e.preventDefault();
    dispatch({ type: MEDIUM, payload: medium });
    setMedium("");
  };
  let handleLow = (e) => {
    e.preventDefault();
    dispatch({ type: LOW, payload: low });
    setLow("");
  };

  return (
    <div>
      <h5>BUG TRACKER</h5>

      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <form onSubmit={handleCritical}>
            <input
              value={cri}
              onChange={(e) => {
                setCrei(e.target.value);
              }}
              required
            />
            <button type="submit">Report Bug</button>
          </form>
          <h5 className="red">Critical Severity</h5>
          {criticalSeverity.map((ele, i) => {
            return (
              <div key={i}>
                <h5 className="red">{ele}</h5>
              </div>
            );
          })}
        </div>
        <div>
          <form onSubmit={handleMajor}>
            <input
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
              required
            />
            <button type="submit">Report Bug</button>
          </form>
          <h5 className="yellow">Major Severity</h5>
          {majorSeverity.map((ele, i) => {
            return (
              <div  key={i}>
                <h5 className="yellow">{ele}</h5>
              </div>
            );
          })}
        </div>
        <div>
          <form onSubmit={handleMedium}>
            <input
              value={medium}
              onChange={(e) => {
                setMedium(e.target.value);
              }}
              required
            />
            <button type="submit">Report Bug</button>
          </form>
          <h5 className="blue">Medium Severity</h5>
          {mediumSeverity.map((ele, i) => {
            return (
              <div key={i}>
                <h5 className="blue">{ele}</h5>
              </div>
            );
          })}
        </div>
        <div>
          <form onSubmit={handleLow}>
            <input
              value={low}
              onChange={(e) => {
                setLow(e.target.value);
              }}
              required
            />
            <button type="submit">Report Bug</button>
          </form>
          <h5 className="green">Low Severity</h5>
          {lowSeverity.map((ele, i) => {
            return (
              <div key={i}>
                <h5 className="green">{ele}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
