import React, { useState } from 'react'
import { Modal, Form, Image, Button } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher';
import { users_url } from '../redux/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import imgPreviewSrc from '../helpers/imgPreviewSrc';


const ProfileAvatarModal = ({dispatch, user, setUser, show, setShow}) => {

    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {if (show) {handleOpen()}}, [show])

    const handleOpen = () => setImgUrl(user.avatar || "")

    const handleChange = (e) => setImgUrl(e.target.value)

    const handleClose = () => {
        setShow(false)
        setImgUrl("")
    }

    const handleSave = () => {
        fetcher(users_url + '/' + user.id, {method: "PATCH", body: {avatar: imgUrl}})
        .then(data=>{
            setUser(data.user)
            dispatch({type: "REGISTER_SUCCESS", payload: data.user})
        })
        handleClose()
    }

    return (
        <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Edit your profile picture</Modal.Title>
                </Modal.Header>
                
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Image src={imgPreviewSrc(imgUrl)} fluid/>
                            <Form.Control
                                    type="url" 
                                    placeholder="image url" 
                                    value={imgUrl}
                                    onChange={handleChange}
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
    )
}

const mapDispatcToProps = (dispatch) => {
    return {dispatch: dispatch}
}


export default connect(mapDispatcToProps)( ProfileAvatarModal)