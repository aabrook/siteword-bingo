import React from 'react'
import Word from './Word'
import WithState from './WithState'

const Row = ({ label, words, set, selectWord, state, setState }) => {
  const expand = () => setState((state) => ({...state, expanded: true}))
  const {expanded = false} = state || {}

  if(expanded){
    return <div>
      {
        words.map(
          (word, i) => <Word key={`word_${i}`} word={word} />
        )
      }
    </div>
  }

  return <div>
    <button onClick={() => selectWord(set)}>{label}</button>
    <span style={{fontSize: '16px', color: 'light-gray'}}>
      {
        words.map(
          (word, i) => <Word style={{display: 'inline'}} key={`word_${i}`} word={word} />
        )
      }
    </span>
  </div>
}

const Words = ({ words, selectWord, label = () => {} }) => words.map((row, i) =>
  <ul style={{wordWrap: 'normal'}} key={`words_${i}`} className="words">
    <li>
      <WithState
        component={Row}
        label={label(i)}
        words={row}
        set={i}
        selectWord={selectWord}
        initialState={{expanded: false}}
      />
    </li>
  </ul>)

export default Words
