import { remove } from 'ramda'
const { floor, random } = Math

export default {
  nextWord: (_, state) => {
    const { activeWords, words } = state
    const idx = floor(random() * floor(activeWords.length - 1))

    const addWord = [...words, activeWords[idx]]
    const removeSelectedWord = remove(idx, 1, activeWords)

    return { ...state,
      words: addWord,
      activeWords: removeSelectedWord
    }
  },

  newGame: (_, state) => ({ ...state,
    activeWords: [],
    words: []
  })
}
