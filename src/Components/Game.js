import React from 'react'
import { connect } from 'react-redux'

import actions, { selectRow, removeRow, newGame, nextWord } from '../Actions/selectWords'

const mapDispatchToProps = dispatch => ({
  nextWord: (state) => dispatch(nextWord(state)),
  newGame: (state) => dispatch(newGame(state))
})

const Game = ({ words, nextWord, newGame }) => (
  <div>
    <button onClick={newGame}>New Game</button>
    <h2>{words[words.length - 1] || 'Ready to start'}</h2>
    <button onClick={nextWord}>Next Word</button>
    <ul>
      {words.map((w, i) => <li key={`used${i}`}>{w}</li>)}
    </ul>
  </div>

)

export default connect(a => a, mapDispatchToProps)(Game)
