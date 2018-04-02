import React from 'react'
import { connect } from 'react-redux'

import { newGame, nextWord } from '../Actions/selectWords'

const mapDispatchToProps = dispatch => ({
  nextWord: (state) => dispatch(nextWord(state)),
  newGame: (state) => dispatch(newGame(state))
})

const Game = ({ activeWords, words, nextWord, newGame }) => (
  <div>
    <h2>{words[words.length - 1] || 'Ready to start'}</h2>
    <button onClick={nextWord}>Next Word</button>
    <div className="content">
      <div>
        <h2>Remaining Words</h2>
        <ul>
          {activeWords.map(w => <li key={`active_${w}`}>{w}</li>)}
        </ul>
      </div>
      <div>
        <h2>Selected Words</h2>
        <ul>
          {words.map((w, i) => <li key={`used_${i}`}>{w}</li>)}
        </ul>
      </div>
    </div>
  </div>
)

export default connect(a => a, mapDispatchToProps)(Game)
