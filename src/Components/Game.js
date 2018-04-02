import React from 'react'

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

export default Game
