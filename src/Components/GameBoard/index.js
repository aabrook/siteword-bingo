import React from 'react'
import { connect } from 'react-redux'
import { identity, remove, splitEvery } from 'ramda'

const { floor, random } = Math

const words = (total, xs) => {
  if(total <= 0 || !xs.length){
    return []
  }

  const idx = floor(random() * floor(xs.length - 1))
  return [xs[idx], ...words(total - 1, remove(idx, 1, xs))]
}

const GameBoard = ({ rowCount, colCount, activeWords }) =>
  <div className="content">
    <table className="game-board">
      <tbody>
        {
          splitEvery(colCount, words(rowCount * colCount, activeWords))
            .map(row =>
              <tr>
                {row.map(col => <td>{col}</td>)}
              </tr>
            )
        }
      </tbody>
    </table>
  </div>

export default connect(identity)(GameBoard)
