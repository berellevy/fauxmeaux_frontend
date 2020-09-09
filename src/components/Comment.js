import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserLink from './UserLink'
import { CompAge } from './CompAge';


const Comment = ({comment}) => {
    let { user, text, updated_at } = comment
    return (
        <Row>
            <Col align="left" sm="auto">
                <UserLink user={user}/><span> {text}</span> 
            </Col>
            <Col/>
            <Col align="right" sm="auto">
                <CompAge date={updated_at} />
            </Col>
        </Row>
    )
}

export default Comment