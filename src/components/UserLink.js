import React from 'react'
import { Image } from "react-bootstrap"
import ProfileIcon from "../icons/ProfileIcon"
import { NavLink } from 'react-router-dom'

const UserLink = ({user}) => {
    const { username, avatar } = user

    const defaultAvatar = avatar ? <Image src={avatar} roundedCircle thumbnail/> : <ProfileIcon/>

    return (
        <NavLink to={"/" + username} variant="dark">
            {defaultAvatar} <span variant="dark" style={{marginLeft: "4px", color: "black", fontWeight: "bold"}}>{username}</span>
        </NavLink>
    )
}

export default UserLink