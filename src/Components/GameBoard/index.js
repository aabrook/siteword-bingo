import React from 'react'
import { connect } from 'react-redux'
import { identity, splitEvery } from 'ramda'

import { refreshCard } from '../../Actions'

const mapDispatchToProps = dispatch => ({
  refreshCard: (state) => dispatch(refreshCard(state))
})

const GameBoard = ({ colCount, gameCard, refreshCard }) =>
  <div className="content">
    <table className="game-board">
      <tbody>
        {
          splitEvery(colCount, gameCard)
            .map(row =>
              <tr>
                {row.map(col => <td>{col}</td>)}
              </tr>
            )
        }
      </tbody>
    </table>
    <button onClick={refreshCard}>Show Card</button>
  </div>

export default connect(identity, mapDispatchToProps)(GameBoard)
