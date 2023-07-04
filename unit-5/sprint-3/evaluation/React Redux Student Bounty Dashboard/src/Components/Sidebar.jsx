/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export const Sidebar = () => {
  let [searchParam, setSearchParam] = useSearchParams();
  let initialData = searchParam.getAll("batch");
  let [data, setData] = useState(initialData || []);
  let [page,setPage]=useState(1)

  let handleChange = (e) => {
    let val = e.target.value;
    let newData = [...data];
    if (newData.includes(val)) {
      newData = newData.filter((ele) => ele !== val);
    } else {
      newData.push(val);
    }
    setData(newData);
  };
  console.log(page);

  useEffect(() => {
    let obj = {
      batch: data,
      page
      
    };
    setSearchParam(obj);
  }, [data,page]);

  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input
          data-testid="batch-web101"
          type="checkbox"
          value="WEB101"
          onChange={handleChange}
          checked={data.includes("WEB101")}
        />
        <label>WEB-101</label>
        <br />
        <br />
        <input
          data-testid="batch-js201"
          type="checkbox"
          value="JS201"
          onChange={handleChange}
          checked={data.includes("JS201")}
        />
        <label>JS-201</label>
        <br />
        <br />
        <input
          data-testid="batch-rct101"
          type="checkbox"
          value="RCT101"
          onChange={handleChange}
          checked={data.includes("RCT101")}
        />
        <label>RCT101</label>
        <br />
        <br />
        <input
          data-testid="batch-rct211"
          type="checkbox"
          value="RCT211"
          onChange={handleChange}
          checked={data.includes("RCT211")}
        />
        <label>RCT211</label>
        <br />
        <br />
        <input
          data-testid="batch-nxm101"
          type="checkbox"
          value="NXM101"
          onChange={handleChange}
          checked={data.includes("NXM101")}
        />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button disabled={page==1} onClick={()=>setPage(page-1)} data-testid="page-prev">Previous</button>
        <button>{page}</button>
        <button onClick={()=>setPage(page+1)} data-testid="page-next">Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
