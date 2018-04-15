import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { enterRowCount, enterColumnCount } from '../../Actions'
import GameBoard from '../GameBoard'

const mapStateToProps = a => a
const mapDispatchToProps = dispatch => ({
  enterColumnCount: (count) => dispatch(enterColumnCount(parseInt(count.target.value, 10))),
  enterRowCount: (count) => dispatch(enterRowCount(parseInt(count.target.value, 10)))
})

const GameCard = ({ enterRowCount, enterColumnCount, activeWords, rowCount, colCount }) =>
  <div>
    <input onChange={enterRowCount} placeholder="Rows" value={rowCount} />
    <input onChange={enterColumnCount} placeholder="Columns" value={colCount} />
    <GameBoard />
    <Link to="/game">Start Game</Link>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
