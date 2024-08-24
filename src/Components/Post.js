import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }

    clickHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <input type='text' name='userId' onChange={this.clickHandler} value={userId} />
                <input type='text' name='title' onChange={this.clickHandler} value={title} />
                <input type='text' name='body' onChange={this.clickHandler} value={body} />
                <input type='submit' />
            </form>
            </>
        )
    }
}

export default Post