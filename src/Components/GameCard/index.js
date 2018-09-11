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
    <h1>Bingo card size</h1>
    Rows: <input onChange={enterRowCount} placeholder="Rows" value={rowCount} />
    Columns: <input onChange={enterColumnCount} placeholder="Columns" value={colCount} />
    <GameBoard />
    <Link to="/game">Start Game</Link>
    <h2>Selected Words</h2>
    <ul>
      {activeWords.sort().map(word => <li>{word}</li>)}
    </ul>
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(GameCard)
