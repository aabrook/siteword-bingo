import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { identity } from 'ramda'

import Words from '../Words'
import { selectRow, removeRow } from '../../Actions'

const mapDispatchToProps = dispatch => ({
  selectWords: (row, state) => dispatch(selectRow(row, state)),
  removeWords: (row, state) => dispatch(removeRow(row, state))
})

const SetupGame =
  ({ selectWords, availableWords, removeWords, selectedWords }) => (
    <Fragment>
      <div className="content">
        <div className="available-words">
          <h2>Available Words</h2>
          <Words selectWord={selectWords} words={availableWords} label={(i) => `Add`} />
        </div>
        <div className="selected-words">
          <h2>Selected Words</h2>
          <Words selectWord={removeWords} words={selectedWords} label={(i) => `Remove`} />
        </div>
      </div>

      <Link to="/card" className="launch">Create Cards</Link>
    </Fragment>
  )

export default connect(identity, mapDispatchToProps)(SetupGame);
