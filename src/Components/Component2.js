import React, { Component } from 'react'

class Component2 extends Component{
    constructor(props) {
        super(props)    
        this.state = {
            count : 0
        }
    }

    Increment = () => {
        this.setState((prevState) => {
            return {count : prevState.count + 1}
        })
    }

    Decrement = () => {
        this.setState((prevState) => {
            return {count : prevState.count - 1}
        })
    }

    render() {
        if(this.state.count < 0){
            throw new Error("Negative Error")       
        }
        return (
        <>
        <label>{this.props.product}: </label>
        <button onClick={this.Increment}>+</button><input style={{'width':'20px','textAlign':'center'}} type='text' value={this.state.count}/>
        <button onClick={this.Decrement}>-</button><br/>
        </>
        )
    }
}

export default Component2