import logo from './logo.svg';
import './App.css';
import PinTab from './Components/PinTab';
import { useState } from 'react';

function App() {
  let [otp,setOtp]=useState('')
  return (
    <div className="App">
     <h1>Genric Component</h1>
     <PinTab length={3} maxChar={2} setOtp={setOtp}/>
     <h2>OTP: {otp}</h2>
    </div>
  );
}


export default App;
