//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { CurrencyConvertor } from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment=()=>{
    setCount(count+1);
    alert("Hello! Member 1");
  }

  const decrement=()=>{
    if(count===0){
        alert("Cannot decrement further!!")
    }
    else{
    setCount(count-1);
    }
  }

  const sayWelcome=()=>{
    alert("Welcome")
  }

  const OnPress=()=>{
    alert("I was clicked");
  }

  return (
    <div className="App">
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={sayWelcome}>Say Welcome</button>
      <button onClick={OnPress}>Click on me</button>
      <CurrencyConvertor/>
    </div>
  );
}

export default App;
