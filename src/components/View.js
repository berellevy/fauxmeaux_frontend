import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from './Post'
import LockCard from './LockCard'

const rowStyle = {
    marginTop: "3em"
}


class View extends Component {

    display = () => {
        let { post, locked } = this.props.view
        return (
            locked  
                ? <LockCard/>
                : <Post post={post} />
        )
    }

    render() {
        return (
            <Row style={rowStyle}>
                <Col>
                    {this.display()}
                </Col>
            </Row>
            
            
        )
    }
}


export default View