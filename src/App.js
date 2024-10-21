import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const[color,setColor]=useState('red');
  
  const clickHandler = ()=>{
    setColor('blue');
  }
  return (
    <div className="App">
      <h1>My favourate color is {color}</h1>
      <button className="myButton" onClick={clickHandler}>Button</button>
    </div>
  );
}

export default App;
