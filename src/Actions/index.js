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

export const enterColumnCount = count => ({
  type: 'enterColumnCount',
  count
})

export const enterRowCount = count => ({
  type: 'enterRowCount',
  count
})
