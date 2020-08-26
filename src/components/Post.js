import React from 'react'


function Post({post}) {
    let { text } = post
    return (
        <li>
            <h5>Post</h5> 
            <p>{text}</p>
        </li>
    )
}


export default Post