import React from 'react'
import { Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import UserLink from '../components/UserLink'


const UserList = ({users}) => {
    console.log(users);
    const userlinksList = () => {
        return users.map((user)=>{
            return (
                <Row>
                    <UserLink user={user} />
                </Row>
            )
        })
    }

    return (
        <>
            <h1>Users</h1>
            {userlinksList()}
        </>
    )
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps)(UserList)