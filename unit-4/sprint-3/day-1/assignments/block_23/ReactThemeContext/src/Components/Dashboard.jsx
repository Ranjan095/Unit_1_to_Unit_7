/** @format */
import data from "../db.json";
import User from "./User";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";

export const Dashboard = () => {

    let {isDarkTheme,setIsDarkTheme}=useContext(ThemeContext)

    let handleChange=(e)=>{
        let val=e.target.value;
        val=='dark' ? setIsDarkTheme(true) : setIsDarkTheme(false)
    }
    console.log(isDarkTheme)

  return (
    <div data-testid="dashboard-cont" style={{background:isDarkTheme?'black':'white'}}>
      <select
        data-testid="select-theme"
        onChange={handleChange}
      >
        <option value="white">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
      {/* map through the users and render User component */}
      {data.map((ele)=><User key={ele.id} user={ele} isDarkTheme={isDarkTheme}/>)}
      {/* <User user={data}/> */}
      {/* {data.map((ele) => (
        <User
        theam={theam}
          key={ele.id}
          name={ele.name}
          position={ele.position}
          level={ele.level}
          points={ele.points}
          img={ele.img}
        />
      ))} */}
    </div>
  );
};
