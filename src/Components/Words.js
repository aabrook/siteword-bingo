import React from 'react'
import Word from './Word'

const Words = ({ words, selectWord = console.log }) => words.map((row, i) =>
  <ul cssClass="words">
    <li onClick={() => selectWord(i)}>{
      row.map(w => <Word key={i} word={w} />)
    }</li>
  </ul>)

export default (Words)
