import React, { Component } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Post from './Post'
import LockCard from './LockCard'
import pluralize from 'pluralize'
import AdCard from './AdCard'
import ReactCSSTransitionReplace from 'react-css-transition-replace'


const rowStyle = {
    marginTop: "3em"
}

const cardStyle = {

    transition: "0.4s"
}




class View extends Component {
    
    display = () => {
        let { view } = this.props
        switch (view.locked) {
            case "locked": 
                return <LockCard key={1} metrics={view.metrics}/>
            case "ad":
                return <AdCard key={2} view_id={view.id} ad={view.ad} />
            case "unlocked":
                return <Post
                    key={3} 
                    post={view.post} 
                    view={view}

                />
        }
    }

    render() {

        return (

            <Row style={rowStyle}>
                <Col>
                    <Card className="text-left" style={cardStyle} >
                        {this.display()}
                    </Card>
                </Col>
            </Row>
        )
    }
}


export default View