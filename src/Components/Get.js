import React, { Component } from 'react'
import axios from 'axios'

class Get extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : [],
            errorMsg : ''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts1')
        .then(response => this.setState({
            posts : response.data
        }))
        .catch(error => this.setState({
            errorMsg : "Problem in Fetching Data"
        }))
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <>
            {(posts) ? posts.map(post => <p key={post.id}>{post.id}--{post.title}</p>) : null}
            {(errorMsg) ? <p style={{'color':'red'}}>{errorMsg}</p> : null}
            </>
        )
    }
}

export default Get