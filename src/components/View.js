import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Post from './Post'
import LockCard from './LockCard'
import pluralize from 'pluralize'
import AdCard from './AdCard'

const rowStyle = {
    marginTop: "3em"
}


class View extends Component {
    
    display = () => {
        let { view } = this.props
        switch (view.locked) {
            case "locked": 
                return <LockCard metrics={view.metrics}/>
            case "ad":
                return <AdCard ad={view.ad} />
            case "unlocked":
                return <Post post={view.post} />
        }
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