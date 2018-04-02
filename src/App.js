import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import Game from './Components/Game'
import Words from './Components/Words'
import words from './lib/words'
import actions, { selectRow, removeRow, nextWord } from './Actions/selectWords'

const mapDispatchToProps = dispatch => ({
  selectWords: (row, state) => dispatch(selectRow(row, state)),
  removeWords: (row, state) => dispatch(removeRow(row, state)),
  nextWord: (row, state) => dispatch(nextWord(row, state))
})

const mapStateToProps = state => state

const App = ({
  activeWords,
  selectWords,
  removeWords,
  availableWords,
  selectedWords,
  words,
  nextWord
}) => {
  return <div className="App">
    <header className="App-header">
      <h1 className="App-title">Sight Words Bingo</h1>
    </header>
    <div>
      <h2>Available Words</h2>
      <Words selectWord={selectWords} words={availableWords} />
    </div>
    <div>
      <h2>Selected Words</h2>
      <Words selectWord={removeWords} words={selectedWords} />
    </div>
    <Game words={words} nextWord={nextWord} />
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
