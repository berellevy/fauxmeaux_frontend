import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from './Post'
import LockCard from './LockCard'
import pluralize from 'pluralize'

const rowStyle = {
    marginTop: "3em"
}


class View extends Component {

    display = () => {
        let { post, locked, metrics } = this.props.view
        return (
            locked  
                ? <LockCard metrics={metrics}/>
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