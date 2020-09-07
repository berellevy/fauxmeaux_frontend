import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Post from './Post'
import LockCard from './LockCard'
import AdCard from './AdCard'
import '../View.scss'

const rowStyle = {
    marginTop: "3em"
}

const View = ({view}) => {
    
    const display = () => {
        switch (view.locked) {
            case "locked": 
                return<LockCard
                key={1} 
                metrics={view.metrics}
                />
            case "ad":
                return <AdCard
                    key={2} 
                    view_id={view.id} 
                    ad={view.ad}
                />
            case "unlocked":
                return <Post
                    key={3} 
                    post={view.post} 
                    view={view}
                />
        }
    }

    return (
        <Row style={rowStyle}>
            <Col>
                <Card className="text-left">
                        {display()}
                </Card>
            </Col>
        </Row>
    )
}


export default View