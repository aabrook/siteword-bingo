import React from 'react';
import { connect } from 'react-redux'

import { enterRowCount, enterColumnCount } from '../../Actions'
import GameBoard from '../GameBoard'

const mapStateToProps = a => a
const mapDispatchToProps = dispatch => ({
  enterColumnCount: (count) => dispatch(enterColumnCount(parseInt(count.target.value))),
  enterRowCount: (count) => dispatch(enterRowCount(parseInt(count.target.value)))
})

const GameCard = ({ enterRowCount, enterColumnCount, activeWords }) =>
  <div>
    <input onChange={enterRowCount} placeholder="Rows" />
    <input onChange={enterColumnCount} placeholder="Columns" />
    <GameBoard />
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
