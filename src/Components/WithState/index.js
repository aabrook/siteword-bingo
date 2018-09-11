import React, {Component} from 'react'

export default class WithState extends Component {
  constructor(props) {
    super()
    this.setState(props.initialState)
  }
  render() {
    const {component: Comp, ...rest} = this.props
    return <Comp
      {...rest}
      setState={(f) => this.setState(f)}
      state={this.state}
    />
  }
}
