import React, { Component } from 'react'
import { headers, users_url } from '../redux/actions'
import { Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class UserList extends Component{

    userlinksList = () => {
        return this.props.users.map(u=>{
            return (
                <Row>
                    <NavLink to={"/"+ u.username} >
                        {u.username}
                    </NavLink>
                </Row>
            )
        })
    }

    render() {
        return (
            <>
                
                <h1>Users</h1>
                {this.userlinksList()}


            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users}
}

export default connect(mapStateToProps)(UserList)