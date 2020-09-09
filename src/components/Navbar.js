import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import CameraIcon from '../icons/CameraIcon'
import LogoutButton from './LogoutButton'
import Logo from '../icons/Logo'
import { Button, Navbar, Nav, Col } from 'react-bootstrap'
import NavSearch from './NavSearch'
import { connect } from 'react-redux'



const  NavBar = ({user}) => {
    return (
        <Navbar bg="light">
            <Col>
            <Nav className="mr-auto">
                <Navbar.Brand>
                    <Logo />
                </Navbar.Brand>
            </Nav>
            </Col>

            <Col>
            <Nav>
                <NavSearch />
            </Nav>
            </Col>

            <Col align="right" >

            <Button variant="link">
            <NavLink to="/">
                <HomeIcon/>
            </NavLink>
            </Button>

            <Button variant="link">
            <NavLink to="/post">
                <CameraIcon/>
            </NavLink>
            </Button>
          
            <Button variant="link">
            <NavLink to={"/" + user.username} >
                <ProfileIcon user={user}/>
            </NavLink>
            </Button>

            <Button variant="link">
            <NavLink to="#">
                <LogoutButton/>
            </NavLink>
            </Button>
            </Col>

        </Navbar>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(NavBar)