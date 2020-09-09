import React from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image } from 'react-bootstrap'


const ProfileAvatar = ({user}) => {
    return (
        <>
            <Image
                src={defaultImg(user && user.avatar)} 
                fluid 
                roundedCircle
            />
        </>
    )
}


export default ProfileAvatar