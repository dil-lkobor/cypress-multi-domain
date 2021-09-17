import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catFack, setCatFact] = React.useState(null);

  React.useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(results => results.json())
      .then(data => {
        setCatFact(data.fact);
      });
  }, []);

  return (
    <div className="App">
      <h1>Cypress multi domain test</h1>
      <p>{ catFack }</p>
    </div>
  );
}

export default App;
