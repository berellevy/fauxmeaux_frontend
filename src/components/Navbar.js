import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import CameraIcon from '../icons/CameraIcon'
import LogoutButton from './LogoutButton'
import Logo from '../icons/Logo'
import { Button, Navbar, Nav, Container } from 'react-bootstrap'
import NavSearch from './NavSearch'



function NavBar() {
    return (
        <Navbar bg="light">

            <Nav className="mr-auto">
                <Navbar.Brand>
                    <Logo />
                </Navbar.Brand>
            </Nav>

            <Nav className="justify-content-center" >
                <NavSearch />
            </Nav>
            
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

        </Navbar>
    )
}


export default NavBar