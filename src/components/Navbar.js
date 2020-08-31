import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import CameraIcon from '../icons/CameraIcon'
import LogoutButton from './LogoutButton'
import Logo from '../icons/Logo'
import { Button, Navbar, Nav, Container, Col } from 'react-bootstrap'
import NavSearch from './NavSearch'



function NavBar() {
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

            <Col >

            <NavLink to="/users">
                all users
            </NavLink>


            <Button variant="link">
            <NavLink to="/">
                <HomeIcon/>
            </NavLink>
            </Button>
          
            <Button variant="link">
            <NavLink to="/profile">
                <ProfileIcon/>
            </NavLink>
            </Button>

            <Button variant="link">
            <NavLink to="/post">
                <CameraIcon/>
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


export default NavBar