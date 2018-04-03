import { compose, remove, uniq, flatten } from 'ramda'

const activeWords = compose(uniq, flatten)

export default {
  selectRow: ({ row}, state) => {
    const { selectedWords, availableWords } = state

    const allSelectedWords = [...selectedWords, availableWords[row]]

    return ({ ...state,
      selectedWords: allSelectedWords,
      activeWords: activeWords(allSelectedWords)
    })
  },

  removeRow: ({ row}, state) => {
    const { selectedWords } = state
    const droppedRow = remove(row, 1, selectedWords)

    return ({ ...state,
      selectedWords: droppedRow,
      activeWords: activeWords(droppedRow)
    })
  },
}
