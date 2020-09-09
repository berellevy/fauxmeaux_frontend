import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const style = {
    float: "right",
    fontSize: "small",
}

export const CompAge = ({date}) => {
    return (
        <span className="font-weight-light" style={style}>
            <ReactTimeAgo date={date}/>
        </span>
    )
}