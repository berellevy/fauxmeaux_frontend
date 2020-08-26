import React, { Component } from 'react'
import Post from '../components/Post'


class Feed extends Component {
    postsArray = [
        "hello!!",
        "byebye",
        "wheredego?"
    ]
    posts = () => this.postsArray.map(post => <Post text={post} />)
    render() {
        return (
            <div>
                <h1>Feed</h1> 
                <ul>
                    {this.posts()}
                </ul>
            </div>
        )

    }
}


export default Feed