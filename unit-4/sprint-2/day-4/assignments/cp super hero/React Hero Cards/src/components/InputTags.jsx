/** @format */

import Card from "./Card";
import { useState } from "react";

let obj = {
  name: "",
  height: "",
  weight: "",
  powerlevel: "",
};

const InputTags = () => {
  let [hero, setHero] = useState(obj);
  let [data, setData] = useState([]);
  let [value, setValue] = useState('');
  let [currentData, setCurrentData] = useState([]);
  let { name, height, weight, powerlevel } = hero;

  let maxFun = (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      // console.log(typeof arr[i].powerlevel)
      if (max < +arr[i].powerlevel) {
        max = +arr[i].powerlevel;
      }
    }
    return max;
  };

  let handlePowerFull = () => {
    let power = data.filter((ele) => +ele.powerlevel === maxFun(data));
    setCurrentData(power);
    console.log(power);
    maxFun(data);
  };

  let handleAll = () => {
    setCurrentData(data);
  };

  // console.log(name,height,weight,powerlevel)
  let handleChange = (e) => {
    let value = e.target.value;
    setValue(value)
    setHero({ ...hero, [e.target.name]: value });
  };

  let addHero = (e) => {
    e.preventDefault();
    setData([...data, hero]);
    setCurrentData([...data, hero]);
    setHero(obj);
    setValue('')
  };
  // console.log(data)
  return (
    <>
      <form>
        <input
          data-testid="input-name"
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          data-testid="input-height"
          type="number"
          placeholder="height cms"
          name="height"
          onChange={handleChange}
          value={height}
        />
        <br></br>
        <br></br>
        <input
          data-testid="input-weight"
          type="number"
          placeholder="weight kg"
          name="weight"
          onChange={handleChange}
          value={weight}
        />
        <br></br>
        <br></br>
        <input
          data-testid="input-power"
          type="number"
          placeholder="power level"
          name="powerlevel"
          onChange={handleChange}
          value={powerlevel}
        />{" "}
        <br></br>
        <br></br>
        <button
          data-testid="add-button"
          onClick={addHero}
          disabled={value==false}
        >
          Add SuperHero
        </button>
        <br></br>
        <br></br>
      </form>
      <button data-testid="most-powerfull" onClick={handlePowerFull}>
        Most Powerful Superhero
      </button>
      <br></br>
      <br></br>
      <button data-testid="all-superheroes" onClick={handleAll}>
        Show All
      </button>
      <Card data={currentData} />
    </>
  );
};

export default InputTags;
