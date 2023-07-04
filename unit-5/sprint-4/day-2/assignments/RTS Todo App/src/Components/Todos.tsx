/** @format */

import React, { useEffect, useState } from "react";
import Todo from "./Todo";

interface TodoInterface {
  title: string;
  description: string;
  status: boolean;
  id: number;
}

function Todos() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const todosdata = localStorage.getItem("todos");
    todosdata == null ? setData([]) : setData(JSON.parse(todosdata));
  }, [data.length]);

  const Update=(id:number)=>{
      const Data=data.length>0 && data.map((ele:TodoInterface)=>{
        return ele.id==+id?{...ele,status:!ele.status}:ele
      })
      Data && localStorage.setItem('todos',JSON.stringify(Data))
  }

  return (
    <div>
      {/* All Todos Should be shown here  */}
      {data?.map((ele: TodoInterface) => {
        return <Todo key={Math.random()} {...ele} Update={Update}/>;
      })}
    </div>
  );
}

export default Todos;
