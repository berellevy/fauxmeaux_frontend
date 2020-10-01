import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import UserLink from '../components/UserLink'


const UserList = ({users}) => {
    return (
        <>
            <h1>Users</h1>
            <Row>
                <Col sm={2}/> 
                <Col>
                    {users.map((user)=><Row><UserLink user={user} /></Row>)}
                </Col>
            </Row>
        </>
    )
}

export default connect( ({users})=> ({users}) )(UserList)