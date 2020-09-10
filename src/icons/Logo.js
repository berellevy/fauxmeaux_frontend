import React from 'react'


function Logo({large}) {
    const style = large ? {fontSize: "200%"} : null
    return <span style={style}>𝐹𝒶𝓊𝓍𝑀𝑒𝒶𝓊𝓍</span> 
}


export default Logo