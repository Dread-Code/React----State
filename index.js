import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const Button = () =>{
  const [counter, setCounter] = useState(0);
  return (
  
    <div>
      <p>Me has puesheado {counter} veces </p>
      <button onClick = { ()=>setCounter(counter+1)} >click me</button>
    </div>
  )
} 

const App = () =>{
  return <Button/>
}

render(<App />, document.getElementById('root'));
