import logo from './logo.svg';
import './App.css';
import Render from './Component/Posts';
import React, { useEffect, useState } from 'react'


function App() {
let [todo,setTodo]=useState([])
let [loading,setLoading]=useState(false)
let[err,setErr]=useState(false)
let [page,setPage]=useState(1)

function pageHandler(val){
setPage(page+val)
console.log(page)
}

    async function GetData(page){
        setLoading(true)
        try {
            let res=await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`);
            let data=await res.json();
            setTodo(data)
            setLoading(false)
            console.log(todo)
        } catch (error) {
            setErr(true)
            setLoading(false)
        }
    };

    function deleteTodo(id){
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
            method:'DELETE',
            headers:{"Content-Type": "application/json"}
        })
        // .then((res)=>console.log(res))
        
        // .then((data)=>{
        //     console.log(data)
          
        // })
        // console.log(id)
        GetData(page)
    };
    
   useEffect(()=>{

    GetData(page)

   },[page])

   if(loading){
    return(
        <h1>Loading.....</h1>
    )
   };

   if(err){
    return(
        <h1>Somthing went wrong</h1>
    )
   }
   
   
  return (
    <div className="App">
      <h1>Crud_todo</h1>

    {todo.map((ele)=> <Render key={ele.id} title={ele.title} id={ele.id} handlerDelete={deleteTodo}/>)}

    <button disabled={page==1} onClick={()=>pageHandler(-1)}>Previous</button>
    <button disabled>{page} </button>
    <button disabled={page==20} onClick={()=>pageHandler(+1)}>Next</button>


    </div>
  );
}

export default App;
