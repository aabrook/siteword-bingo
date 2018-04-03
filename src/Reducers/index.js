import setup from './setup'
import game from './game'

export default (state, props) => {
  const reducers = { ...game, ...setup }
  const { type } = props
  if(type && reducers.hasOwnProperty(type)){
    return reducers[type](props, state)
  }

  return state
}
