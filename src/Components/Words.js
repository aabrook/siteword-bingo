import React from 'react'
import Word from './Word'

const Words = ({ words, selectWord }) => words.map((row, i) =>
  <ul key={`words_${i}`} className="words">
    <li onClick={() => selectWord(i)}>{
      row.map((w, j) => <Word key={`word_${i}_${j}`} word={w} />)
    }</li>
  </ul>)

export default (Words)
