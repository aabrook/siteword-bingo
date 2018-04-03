import React from 'react'
import Word from './Word'

const Words = ({ words, selectWord, showSet = () => {} }) => words.map((row, i) =>
  <ul key={`words_${i}`} className="words">
    <li onClick={() => selectWord(i)}>
      {showSet(i + 1)}
      <div className="word-set">
        {row.map((w, j) => <Word key={`word_${i}_${j}`} word={w} />)}
      </div>
    </li>
  </ul>)

export default (Words)
