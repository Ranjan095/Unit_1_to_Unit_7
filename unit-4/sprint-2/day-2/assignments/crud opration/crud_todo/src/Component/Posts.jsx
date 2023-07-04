

let Render=({title,id,handlerDelete})=>{
return (
    <li>{id}_{title}_
    <button onClick={()=>handlerDelete(id)}>Delete</button></li>
)
}
export default Render