import React, { useState } from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image } from 'react-bootstrap'
import "../AvatarModal.scss"
import ProfileAvatarModal from './ProfileAvatarModal'


const ProfileAvatarWithEdit = ({user, setUser}) => {
    
    const [show, setShow] = useState(false)

    
    return (
        <>
            <Image
                src={defaultImg(user && user.avatar)} 
                fluid 
                roundedCircle
                onClick={()=>setShow(true)}

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

export default ProfileAvatarWithEdit