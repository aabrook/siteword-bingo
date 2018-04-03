export default ({
  enterRowCount: ({ count }, state) => ({ ...state, rowCount: count }),
  enterColumnCount: ({ count }, state) => ({ ...state, colCount: count })
})
