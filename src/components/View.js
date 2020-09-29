import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Post from './Post'
import AdCard from './AdCard'
import '../View.scss'
import ReactCSSTransitionReplace from 'react-css-transition-replace';

const rowStyle = {
    marginTop: "3em"
}

const View = ({view}) => {
    return (
        <Row style={rowStyle}>
            <Col>
                <Card className="text-left">
                    <ReactCSSTransitionReplace
                        transitionName="ht"
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={700}
                    >
                        {
                            view.ad_view
                                ? <AdCard
                                    key={2} 
                                    view={view}
                                />
                                : <Post
                                    key={3} 
                                    post={view.post} 
                                    view={view}
                                />
                        }
                    </ReactCSSTransitionReplace>
                </Card>
            </Col>
        </Row>
    )
}

export default View