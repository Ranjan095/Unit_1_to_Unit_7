// import HendleDelete from "./Delete";

export default function Render({ title,id}) {
	return (
        <div >
         
            <li>{id}-{title}
            {/* <button>complet</button> {"   "} */}
            {/* <button onClick={()=>HendleDelete(id)}>Delete</button> */}
             </li>
            
        </div>
        
    );
}