import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import ProfileIcon from '../icons/ProfileIcon'
import CameraIcon from '../icons/CameraIcon'


function Navbar() {
    return (
        <nav>
            <NavLink to="/">
                <HomeIcon/>
            </NavLink>

            <NavLink to="/profile">
                <ProfileIcon/>
            </NavLink>
            <NavLink to="/post">
                <CameraIcon/>
            </NavLink>

        </nav>
    )
}


export default Navbar