import React, { Component } from 'react'
import B from './B'
import Context from './Context'

class A extends Component {
    static contextType = Context;
  render() {
    return (
      <div>
        Component A {this.context} Component A
        <B />
      </div>
    )
  }
}

export default A