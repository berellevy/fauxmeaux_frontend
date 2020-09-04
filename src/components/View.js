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
    webkitTansition: "all 0.5s",
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
                return <Post key={3} post={view.post} />
        }
    }



    render() {
        return (
            <Row style={rowStyle}>
                <Col>
                    <Card className="text-left" style={cardStyle} >
                        {/* <ReactCSSTransitionReplace
                            transitionName="cross-fade"
                            // style={{transition: "height 1s ease-in-out 1s"}}
                            transitionEnterTimeout={1000} 
                            transitionLeaveTimeout={1000}
                        > */}

                            {this.display()}
                        {/* </ReactCSSTransitionReplace> */}

                    </Card>
                </Col>
            </Row>
        )
    }
}


export default View