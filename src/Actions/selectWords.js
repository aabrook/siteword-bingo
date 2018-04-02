const { floor, random } = Math

const flatten = (list) => list.reduce((acc, row) => [...acc, ...row], [])
const unique = (list) => list.reduce((ys, x) => ys.includes(x) ? ys : [...ys, x], [])

const reducers = {
  selectRow: (state, row) => {
    const { selectedWords, availableWords } = state

    const allSelectedWords = [...selectedWords, availableWords[row]]

    return ({ ...state,
      selectedWords: allSelectedWords,
      activeWords: unique(flatten(allSelectedWords))
    })
  },
  removeRow: (state, row) => {
    const { selectedWords } = state
    const droppedRow = selectedWords.filter((_, i) => i !== row)

    return ({ ...state,
      selectedWords: droppedRow,
      activeWords: unique(flatten(droppedRow))
    })
  },
  nextWord: (state) => {
    const { activeWords, words } = state
    const idx = floor(random() * floor(activeWords.length - 1))

    const addWord = [...words, activeWords[idx]]
    const removeSelectedWord = activeWords.filter((_, i) => i !== idx)

    return { ...state,
      words: addWord,
      activeWords: removeSelectedWord
    }
  },
  newGame: (state) => ({ ...state,
    activeWords: [],
    words: []
  })
}

export const selectRow = row => ({
  type: 'selectRow',
  row
})

export const removeRow = row => ({
  type: 'removeRow',
  row
})

export const nextWord = () => ({
  type: 'nextWord'
})

export const newGame = () => ({
  type: 'newGame'
})

export default (state, { type, row }) => {
  if(reducers.hasOwnProperty(type)) {
    return reducers[type](state, row)
  }

  return state
}
