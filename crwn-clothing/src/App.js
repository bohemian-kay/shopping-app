import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.components.jsx';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (

  <div>
  <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <HomePage/>
    </div>
    /* 
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/' component={HomePage}/>
    </Switch>
    
    */
  );
}

export default App;
