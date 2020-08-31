import React from 'react'
import Post from '../components/Post'
import { Component } from 'react'
import { posts_url, headers } from '../redux/actions'


class SinglePostPage extends Component {

    state = {
        post: null
    }
    
    componentDidMount() {
        fetch(posts_url + "/" +this.props.match.params.id, {headers: headers()})
        .then(response => response.json())
        .then(data => this.setState({post: data}))
        .catch(error => console.log(error))
        
    }

    render () {
        return (
            this.state.post
            ? <Post post={this.state.post} />
            : null
        )
    }
}


export default SinglePostPage