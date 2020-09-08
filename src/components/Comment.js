import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserLink from './UserLink'


const Comment = ({comment}) => {
    let { user, text } = comment
    return (
        <Row>
            <Col align="left" sm="auto">
                <UserLink user={user}/><span> {text}</span> 
            </Col>
        </Row>
    )
}

export default Comment