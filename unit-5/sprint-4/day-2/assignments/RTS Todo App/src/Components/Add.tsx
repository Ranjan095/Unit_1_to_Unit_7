/** @format */

import { type } from "os";
import React, { useState } from "react";

interface TodoInterface{
  title:string;
  description: string;
  status: boolean;
  id:number
}

const Add = () => {

  const parsData=localStorage.getItem('todos')


  const [title, setTitle] = useState<string>("");
  const [dis, setDis] = useState<string>("");
  const [data,setData]=useState <TodoInterface[]> (parsData==null ? []:JSON.parse(parsData))

 
// console.log(data)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const obj:TodoInterface = {
      title,
      description: dis,
      status: false,
      id:Math.random()
    };
setData([...data,obj])
    localStorage.setItem('todos',JSON.stringify(data))
    setTitle('');
    setDis('')
  };
  // console.log(data)
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <h1>Create New Todo</h1>
      <input
        data-testid="title"
        type="text"
        id="title"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <br />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        placeholder="Discription"
        onChange={(e) => setDis(e.target.value)}
        value={dis}
      ></textarea>
      <br />
      <input type="submit" value="Craete Todo" />
    </form>
  );
};

export default Add;
