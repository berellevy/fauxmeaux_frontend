import React, { useState } from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image } from 'react-bootstrap'
import "../AvatarModal.scss"
import ProfileAvatarModal from './ProfileAvatarModal'


const ProfileAvatar = ({user, setUser}) => {
    
    const [show, setShow] = useState(false)

    const handleOpen = () => { if (user.is_current_user) {setShow(true)} }
    
    return (
        <>
            <Image
                src={defaultImg(user && user.avatar)} 
                fluid 
                roundedCircle
                onClick={handleOpen}
            />

            <ProfileAvatarModal 
                show={show}
                setShow={setShow}
                user={user}
                setUser={setUser}
            />   
        </> 
    )
}

export default ProfileAvatar