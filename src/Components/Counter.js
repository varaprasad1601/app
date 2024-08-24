import React, { Component } from 'react'

const Counter = (WrappedComponent,increment) => {
    class Counter extends Component{
        constructor(props) {
            super(props)    
            this.state = {
                count : 0
            }
        }

        Increment = () => {
            this.setState((prevState) => {
                return {count : prevState.count + increment}
            })
        }
        Decrement = () => {
            this.setState((prevState) => {
                return {count : prevState.count - increment}
            })
        }

        render(){
            return(
                <WrappedComponent count = {this.state.count} Increment = {this.Increment} Decrement = {this.Decrement} {...this.props}/>
            )
        }
    }
    return Counter
}

export default Counter