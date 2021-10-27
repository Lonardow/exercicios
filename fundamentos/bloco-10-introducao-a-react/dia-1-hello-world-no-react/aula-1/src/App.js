import './App.css';
import React, { Component } from 'react';

const arr = ['lista1', 'lista2', 'lista3'];

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello CodeSandbox</h1>
        {arr.map((value) => (
          <ul>
            <li>{value}</li>
          </ul>
        ))}
      </>
    );
  }
}

export default App;
