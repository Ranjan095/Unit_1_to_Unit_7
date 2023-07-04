import "./App.css";
import {React, useState} from "react";
import Post from "./Components/Post";
function App() {
  let [post,setPost]=useState([]);

let getData=()=>{
  return fetch(`https://jsonplaceholder.typicode.com/posts`).then((res)=>res.json())
}
let handleClick=async ()=>{
  let data=await getData()
  setPost(data)
}

  return (
    <div className="App" data-testid="app">
      <button onClick={handleClick}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {post.map((ele)=><Post key={ele.id} title={ele.title} body={ele.body}/>)}
        {/*  map through the posts data and pass props to the Posts component */}
      </div>
    </div>
  );
}

export default App;
