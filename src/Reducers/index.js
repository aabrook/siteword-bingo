import setup from './setup'
import game from './game'
import board from './game-board'

export default (state, props) => {
  const reducers = { ...game, ...setup, ...board }
  const { type } = props
  if(type && reducers.hasOwnProperty(type)){
    return reducers[type](props, state)
  }

  return state
}
