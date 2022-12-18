import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Counter({
    initialValue = 0,
    labelText
  }: {
    initialValue?: number,
    labelText: string,
  }) {
  const [count, setCount] = useState(initialValue);

  function inc() {
    setCount(c => c + 1);    
  }

  return (
    <div>
      <p>{labelText} = {count}</p>
      <button onClick={inc}>+1</button>
      <button onClick={() => setCount(c => c-1)}>-1</button>
    </div>
    
  )
}

function App() {
  return (
    <div className="App">
      <Counter initialValue={5} labelText="one" />
      <Counter labelText='two' />
      <Counter labelText='three' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
