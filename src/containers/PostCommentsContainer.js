import React, { Component } from 'react'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'


class PostCommentsContainer extends Component {

    state = {
        expanded: false
    }

    comments = () => {
        return this.props.comments.map( comment => <Comment comment={comment}/>)
    }

    render() {
        

        return (
            <div>
                {this.comments()}
            </div>
        )
    }
}


export default PostCommentsContainer