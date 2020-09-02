import React from 'react'
import Post from '../components/Post'
import { Component } from 'react'
import { posts_url, headers } from '../redux/actions'


class SinglePostPage extends Component {

    state = {
        view: null
    }
    
    componentDidMount() {
        fetch(posts_url + "/" +this.props.match.params.id, {headers: headers()})
        .then(response => response.json())
        .then(data => this.setState({view: data}))
        .catch(error => console.log(error))
        
    }

    render () {
        return (
            this.state.view
            ? <Post view={this.state.view} />
            : null
        )
    }
}


export default SinglePostPage