import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Words from '../Words'
import { selectRow, removeRow } from '../../Actions'

const mapDispatchToProps = dispatch => ({
  selectWords: (row, state) => dispatch(selectRow(row, state)),
  removeWords: (row, state) => dispatch(removeRow(row, state))
})

const mapStateToProps = state => state

const SetupGame =
  ({ selectWords, availableWords, removeWords, selectedWords }) => (
    <Fragment>
      <div className="content">
        <div>
          <h2>Available Words</h2>
          <Words selectWord={selectWords} words={availableWords} />
        </div>
        <div>
          <h2>Selected Words</h2>
          <Words selectWord={removeWords} words={selectedWords} />
        </div>
      </div>

      <Link to="/game" className="launch">Start Game</Link>
    </Fragment>
  )

export default connect(mapStateToProps, mapDispatchToProps)(SetupGame);
