import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import SetupGame from './Components/SetupGame'
import GameCard from './Components/GameCard'
import Game from './Components/Game'

const App = () => {
  return <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        <a href="/">Sight Words Bingo</a>
      </h1>
    </header>
    <Router>
      <div>
        <Route exact path="/" component={SetupGame} />
        <Route path="/card" component={GameCard} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
  </div>
}

export default App;
