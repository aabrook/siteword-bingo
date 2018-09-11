import React from 'react'
import Word from './Word'
import WithState from './WithState'

const Row = ({ label, words, set, selectWord, state, setState }) => {
  const expand = () => setState((state) => ({...state, expanded: true}))
  const {expanded = false} = state || {}

  if(expanded){
    return <div>
      <span onClick={() => selectWord(set)}>Select</span>
      {
        words.map(
          (word, i) => <Word onClick={() => selectWord(set)} key={`word_${i}`} word={word} />
        )
      }
    </div>
  }

  return <div onClick={expand}>
    + {label}
    <span style={{fontSize: '8px', color: 'light-gray'}}>
      {
        words.map(
          (word, i) => <Word style={{display: 'inline'}} onClick={() => selectWord(set)} key={`word_${i}`} word={word} />
        )
      }
    </span>
  </div>
}

const Words = ({ words, selectWord, label = () => {} }) => words.map((row, i) =>
  <ul key={`words_${i}`} className="words">
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
