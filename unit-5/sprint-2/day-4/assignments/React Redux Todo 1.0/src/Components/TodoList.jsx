import React from "react";
import { useSelector } from "react-redux/es/exports";


// get all the todos from the redux store, and map them inside this component
const TodoList = () => {

let todo=useSelector((store)=>store.todos);
console.log(todo)

  return (
    <div data-testid='todo-list-wrapper'>
{todo.map((ele)=>{
  return <div key={ele.id} data-testid="single-todo" >
    <p>{ele.title}</p>
  </div>
})}
      {/* map all the "individual/single" todo inside this div. */}
      


    </div>
  );
};

export default TodoList;
