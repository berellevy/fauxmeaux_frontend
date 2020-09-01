import React from 'react'
import { Row, Col } from 'react-bootstrap'


function Comment({comment}) {
    let { user, text } = comment
    return (
        <Row>
            <Col align="left" sm="auto">
                <strong>{user.username}</strong> <span> {text}</span> </Col>


        </Row>
    )
}

export default Comment