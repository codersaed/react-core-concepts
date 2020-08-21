import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const prodect = [
    {name: 'PhotoShop',  price: 'US$12.99'},
    {name: 'Illustrator', price: 'US$ 13.66'},
    {name: 'Adobe XD', price: 'US$6.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
       <h1>React Core Concepts</h1>
       <Counter></Counter>
       <Users></Users>
       {
         prodect.map(prodect => <Prodect prodect ={prodect} ></Prodect>)
       }
       {/* <Prodect prodect= {prodect[0]}></Prodect>
       <Prodect prodect= {prodect[1]}></Prodect>
       <Prodect prodect= {prodect[2]}></Prodect> */}
      </header>
    </div>
  );
}

function Users() {
  const [users, setUser] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  })
  return (
  <div>
    <h2>Dynamic User: {users.length}</h2>
    <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      {
        users.map(user => <li>{user.email}</li>)
      }
    </ul>
  </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Prodect(props) {
  const PersonStyle = {
    border: '2px solid yellow',
    margin: '10px',
    padding: '15px'
  }
  return (
    <div style={PersonStyle}>
      <h2>{props.prodect.name} </h2>
      <h4>{props.prodect.price}</h4>
      <button>Buy Now</button>
    </div>
    
  );
}
export default App;
