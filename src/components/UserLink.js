import React from 'react'
import ProfileIcon from "../icons/ProfileIcon"
import { NavLink } from 'react-router-dom'

const UserLink = ({user}) => {
    const { username } = user


    return (
        <NavLink to={"/" + username} variant="dark">
            <ProfileIcon user={user}/> <span variant="dark" style={{marginLeft: "4px", color: "black", fontWeight: "bold"}}>{username}</span>
        </NavLink>
    )
}

export default UserLink