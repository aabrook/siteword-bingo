import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

import Game from './Components/Game'
import Words from './Components/Words'
import { selectRow, removeRow } from './Actions/selectWords'

const mapDispatchToProps = dispatch => ({
  selectWords: (row, state) => dispatch(selectRow(row, state)),
  removeWords: (row, state) => dispatch(removeRow(row, state))
})

const mapStateToProps = state => state

const First = connect(mapStateToProps, mapDispatchToProps)(
  ({ selectWords, availableWords, removeWords, selectedWords }) => (
    <Fragment>
      <div className="content">
        <div>
          <h2>Available Words</h2>
          <Words selectWord={selectWords} words={availableWords} />
        </div>
        <div>
          <h2>Selected Words</h2>
          <Words selectWord={removeWords} words={selectedWords} />
        </div>
      </div>

      <Link to="/game" className="launch">Start Game</Link>
    </Fragment>
  )
)

const App = () => {
  return <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        <Link to="/">Sight Words Bingo</Link>
    </h1>
    </header>
    <Router>
      <div>
        <Route exact path="/" component={First} />
        <Route path="/game" component={Game} />
      </div>
    </Router>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
