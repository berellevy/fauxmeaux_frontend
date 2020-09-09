import React, { useState } from 'react'
import defaultImg from '../helpers/defaultImg'
import { Image, Modal, Button, Form } from 'react-bootstrap'
import validURL from '../helpers/validUrl'
import "../AvatarModal.scss"
import { fetcher } from '../helpers/Fetcher'
import { users_url } from '../redux/actions'
import { connect } from 'react-redux'


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

    const imgPreview = () => imagePreviewSrc || "https://placeholder.pics/svg/300/DEDEDE/555555/add%20an%20image" 
    return (
        <>
            <Image
                src={defaultImg(user && user.avatar)} 
                fluid 
                roundedCircle
                onClick={handleOpen}

            />

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit your profile picture</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Image src={imgPreview()} fluid/>
                            <Form.Control
                                    type="url" 
                                    placeholder="image url" 
                                    value={imgUrl}
                                    onChange={changeHandler}
                                />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </> 
    )
}

const mapDispatcToProps = (dispatch) => {
    return {dispatch: dispatch}
}


export default connect(mapDispatcToProps)( ProfileAvatarWithEdit)