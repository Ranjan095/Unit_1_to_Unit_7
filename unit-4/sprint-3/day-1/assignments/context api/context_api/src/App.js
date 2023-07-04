import logo from './logo.svg';
import './App.css';
import React, { useContext } from 'react';
import { ThemeContext } from './createContextApi';
import Nav from './Nav';
import Footer from './Footer';


function App() {
let {theme,toggle}=useContext(ThemeContext)
 

  return (
    <div className="App" style={{color:theme=='light'?'black':'white',backgroundColor:theme=='light'?'white':'black'}}>
      <Nav/>
      <h1>Hello I'm learning React</h1>
        <h1>Theme :{theme}</h1>
        <button onClick={toggle}>click</button>
       
        <Footer/>
    </div>
  );
}

export default App;