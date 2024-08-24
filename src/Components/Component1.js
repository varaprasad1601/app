import React, { Component } from 'react'
import Counter from './Counter'

class Component1 extends Component {
    render() {
        const {count, Increment, Decrement} = this.props
        return (
        <>
        <button onClick={Increment}>+</button><input style={{'width':'20px','textAlign':'center'}} type='text' value={count}/>
        <button onClick={Decrement}>-</button><br/>
        </>
        )
    }
}

export default Counter(Component1,1)