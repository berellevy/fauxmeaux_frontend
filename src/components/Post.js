import React from 'react'


function Post({text}) {
    return (
        <li>
            <h5>Post</h5> 
            <p>{text}</p>
        </li>
    )
}


export default Post