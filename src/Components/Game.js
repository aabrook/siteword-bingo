import React from 'react'

const Game = ({ words, nextWord }) => (
  <div>
    <h2>{words[words.length - 1] || 'Ready to start'}</h2>
    <button onClick={nextWord}>Next Word</button>
    <ul>
      {words.map((w, i) => <li key={`used${i}`}>{w}</li>)}
    </ul>
  </div>

)

export default Game
