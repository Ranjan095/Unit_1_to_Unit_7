import logo from "./logo.svg";
import "./App.css";
import Render from "./Component/Render";
import React, { useEffect, useState } from "react";

function Res({ text }) {
	return text.map((ele) => (
		<Render key={ele.id} title={ele.title} id={ele.id} />
	));
}

function App() {
	let [text, setText] = useState([]);
	let [loading, setLoading] = useState(false);
	let [err, setErr] = useState(false);
    let [page,setPage]=useState(1)

    let pageHandler=(val)=>{
        setPage(page+val)
        // console.log(page)
    }

	useEffect(() => {
		fetchData(page);
	},[page] );

	let fetchData = async (page) => {
		setLoading(true);
		try {
			let resp = await fetch(
				`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
			);
			let data = await resp.json();
			setText(data);
			setLoading(false);
		} catch (error) {
			setErr(true);
			setLoading(false);
			// alert(error);
		}
	};

	if (loading) {
		return <h1>Loading......</h1>;
	}
	if (err) {
		return <h1>Sonting went wrong</h1>;
	}
    

	return (
		<div className="App">
			<h1>React</h1>
			<Res text={text} />
            <br></br>
            <button disabled={page==1} onClick={()=>pageHandler(-1)}>Previous</button>
            <button disabled>{page}</button>
            <button disabled={page==10} onClick={()=>pageHandler(1)}>Next</button>
		</div>
       
        
	);
    
}

export default App;
