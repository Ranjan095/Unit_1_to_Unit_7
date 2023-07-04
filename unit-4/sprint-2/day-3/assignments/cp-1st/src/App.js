

import "./App.css";
import Post from "./Components/Post";
import React, { useState } from "react";


function App() {
let [todo,setTodo]=useState([])

async function handlerFetch(){
    try {
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts`);
        let data=await res.json();
        setTodo(data)
        // console.log(todo)
    } catch (error) {
        
    }
}

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn" onClick={handlerFetch}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {todo.map((ele)=><Post key={ele.id} title={ele.title} body={ele.body}/>)}
      </div>
    </div>
  );
}

export default App;
