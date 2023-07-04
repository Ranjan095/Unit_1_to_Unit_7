import logo from './logo.svg';
import './App.css';
import {react,useEffect,useState} from 'react'
function App() {
let [todo,setTodo]=useState([]);
let [loading,setLoading]=useState(false);
let [err,setErr]=useState(false)
let [page,setPage]=useState(1);


let getData=(page)=>{
  return fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=50`)
  .then((res)=>res.json());
};

let todos=async()=>{
 try {
  setLoading(true)
  let myData=await getData(page)
setTodo(myData)
setLoading(false)
 } catch (error) {
  setErr(true)
  setLoading(false)
 }
}
useEffect(()=>{
  todos()
},[page])

console.log(todo.length*4)
if(loading){
  return <h1>loading.....</h1>
}
if(err){
  return <h1>Somthing went wrong......</h1>
}
  return (
    <div className="App">
      <h1>Todos</h1>
      <button disabled={page==1} onClick={()=>setPage(page-1)}>prev</button>
      <button>{page}</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
      <hr></hr>
      {todo.map((ele)=><h2 key={ele.id}> {ele.id}__{ele.title}</h2>)}
    </div>
  );
}

export default App;
