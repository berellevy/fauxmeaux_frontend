import React from 'react'
import Comment from '../components/Comment'


const PostCommentsContainer = ({comments}) => {

        return (
            <div>
                {comments.map( (comment, i) => <Comment key={i} comment={comment}/>)}
            </div>
        )
}


export default PostCommentsContainer