const { floor, random } = Math

const flatten = (list) => list.reduce((acc, row) => [...acc, ...row], [])
const unique = (list) => list.reduce((ys, x) => ys.includes(x) ? ys : [...ys, x], [])

// TODO: Correctly use selected/active words
const reducers = {
  selectRow: (row, state) => {
    const { selectedWords, availableWords } = state

    return ({ ...state,
      selectedWords: [...selectedWords, availableWords[row]],
      activeWords: unique(flatten(selectedWords))
    })
  },
  removeRow: (row, state) => {
    const { selectedWords } = state

    return ({ ...state,
      selectedWords: selectedWords.filter((_, i) => i !== row),
      activeWords: unique(flatten(selectedWords))
    })
  },
  nextWord: (_, state) => {
    const { activeWords, words } = state
    const idx = floor(random() * floor(activeWords.length - 1))

    return { ...state,
      words: [...words, activeWords[idx]],
      activeWords: [...activeWords].filter((_, i) => i !== idx)
    }
  },
  newGame: (_, state) => ({ ...state,
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
    return reducers[type](row, state)
  }

  return state
}
