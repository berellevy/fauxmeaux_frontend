import React, { useState } from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image } from 'react-bootstrap'
import validURL from '../helpers/validUrl'
import "../AvatarModal.scss"
import { fetcher } from '../helpers/Fetcher'
import { users_url } from '../redux/actions'
import { connect } from 'react-redux'
import ProfileAvatarModal from './ProfileAvatarModal'


const ProfileAvatarWithEdit = ({user, setUser}) => {
    const [show, setShow] = useState(false)
    const [imgUrl, setImgUrl] = useState("")
    const [imagePreviewSrc, setImagePreviewSrc] = useState(null)

    const handleOpen = () => {
        setImgUrl(user.avatar || "")
        if (validURL(user.avatar)) {
            setImagePreviewSrc(user.avatar)
        } else {
            setImagePreviewSrc(null)
        }
        setShow(true)
    }

    
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

                imagePreviewSrc={imagePreviewSrc}
                setImagePreviewSrc={setImagePreviewSrc}

                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
                
                user={user}
                setUser={setUser}
            />
            
        </> 
    )
}

export default ProfileAvatarWithEdit