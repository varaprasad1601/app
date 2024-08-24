import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            hasError : false    
        }
    }
    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error,info){
        console.log(info)
    }

    render() {
        if (this.state.hasError){
            return <h1 style={{'backgroundColor':'red'}}> something went wrong </h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary