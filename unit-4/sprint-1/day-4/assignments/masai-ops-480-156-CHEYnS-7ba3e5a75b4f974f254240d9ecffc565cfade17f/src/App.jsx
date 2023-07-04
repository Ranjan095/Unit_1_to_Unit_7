import {styles} from './App.css'
import React, { useState } from 'react';

function App() {
 
let [player,setPlayer] =useState("Player 1")
let [counter,setCounter]=useState(0)
let [winner,setWinner]=useState("Still To Be Decided")



let AddOne=()=>{
setCounter(counter+1) 
{player=="Player 1"?setPlayer("Player 2"):setPlayer("Player 1")}
{counter==5?setWinner(player):setWinner(winner)}
// console.log(counter)
}
let AddTwo=()=>{
setCounter(counter+2)
{player=="Player 1"?setPlayer("Player 2"):setPlayer("Player 1")}
{counter==5?setWinner(player):setWinner(winner)}

}

let Res=()=>{
  setCounter(0)
  setPlayer('Player 1')
  setWinner("Still To Be Decided")
}
  return (
    <div className="App">
      <h1>Welcome to Reach Ten Mini-Game</h1>
      
      {/* Display Player Turn here */}
      <span data-testid="turn-container"><h2>Its Your Turn: {player}</h2></span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button disabled={counter>=10} onClick={AddOne} data-testid="add-one-btn" >+1</button>
        <button disabled={counter>=9} onClick={AddTwo} data-testid="add-two-btn" >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container"><h2>Winner: {winner}</h2></span>

      {/* Reset the Game with this button */}
      <button onClick={Res} data-testid="reset-btn">Reset Game</button>
    </div>
  );
}

export default App;
