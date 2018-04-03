import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Step = ({ component, path, next }) => (props) =>
  <div>
    {component}
    <Link to={next}>Next</Link>
  </div>

const Wizard = routes =>
  <div>
    {routes.map(({ component, path, next }) =>
      <Route path={path} component={Step(component)} />
    )}
  </div>

export default Wizard
