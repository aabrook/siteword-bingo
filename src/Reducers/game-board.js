import { remove } from 'ramda'

const { floor, random } = Math

const words = (total, xs) => {
  if(!xs || total <= 0 || !xs.length){
    return []
  }

  const idx = floor(random() * floor(xs.length - 1))
  return [xs[idx], ...words(total - 1, remove(idx, 1, xs))]
}

export default {
  enterRowCount: ({ count }, state) => ({ ...state, rowCount: count }),
  enterColumnCount: ({ count }, state) => ({ ...state, colCount: count }),
  refreshCard: (_, state) => {
    const { rowCount, colCount, activeWords } = state

    return { ...state, gameCard: words(rowCount * colCount, activeWords) }
  }
}
