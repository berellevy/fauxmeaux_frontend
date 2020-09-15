import React, { useState } from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image } from 'react-bootstrap'
import validURL from '../helpers/validUrl'
import "../AvatarModal.scss"
import { fetcher } from '../helpers/Fetcher'
import { users_url } from '../redux/actions'
import { connect } from 'react-redux'
import ProfileAvatarModal from './ProfileAvatarModal'


const ProfileAvatarWithEdit = ({user, setUser, dispatch}) => {
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
    
    const handleClose = () => {
        setShow(false)
        setImgUrl("")
        setImagePreviewSrc("")
    }

    const handleSave = () => {
        console.log(user.id);
        fetcher(users_url + '/' + user.id, {method: "PATCH", body: {avatar: imgUrl}})
        .then(data=>{
            setUser(data.user)
            dispatch({type: "REGISTER_SUCCESS", payload: data.user})
        })
        handleClose()
    }

    const changeHandler = (e) => {
        let { value } = e.target
        setImgUrl(value)
        if (validURL(value)) {
            setImagePreviewSrc(value)
        } else {
            setImagePreviewSrc(null)
        }
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
                handleClose={handleClose}
                handleSave={handleSave}
                imagePreviewSrc={imagePreviewSrc}
                imgUrl={imgUrl}
                changeHandler={changeHandler}
            />
            
        </> 
    )
}

const mapDispatcToProps = (dispatch) => {
    return {dispatch: dispatch}
}


export default connect(mapDispatcToProps)( ProfileAvatarWithEdit)