import React, { Component } from 'react'
import { headers, users_url } from '../redux/actions'
import { Nav, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


class UserList extends Component{

    state = { users: [] }

    componentDidMount() {
        fetch(users_url, { headers: headers() })
        .then(response=>response.json())
        .then(data=>this.setState({users: data }))
    }

    userlinksList = () => {
        return this.state.users.map(u=>{
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
        console.log(this.state);
        return (
            <>
                
                <h1>All Users</h1>
                {this.userlinksList()}


            </>
        )
    }
}

export default UserList