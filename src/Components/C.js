import React, { Component } from 'react'
import {Consumer} from './Context'

class C extends Component {
  render() {
    return (
      <div>Component C <Consumer>
            {(username) => <>{username}</>}
        </Consumer> Component C
      </div>
    )
  }
}

export default C