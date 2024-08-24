import React, { Component } from 'react'
import C from './C'
import Context from './Context'

class B extends Component {
  render() {
    return (
      <div>
        Component B {this.context} Component B
        <C />
        </div>
    )
  }
}
B.contextType = Context
export default B