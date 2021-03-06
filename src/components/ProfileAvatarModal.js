import React, { useState } from 'react'
import { Modal, Form, Image, Button } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import imgPreviewSrc from '../helpers/imgPreviewSrc';
import { users_url } from '../helpers/urls';
import { registerSuccess } from '../redux/actions';


const ProfileAvatarModal = ({dispatch, user, setUser, show, setShow}) => {

    const [imgUrl, setImgUrl] = useState("")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {if (show) {handleOpen()}}, [show])

    const handleOpen = () => setImgUrl(user.avatar || "")

    const handleChange = (e) => setImgUrl(e.target.value)

    const handleClose = () => {
        setShow(false)
        setImgUrl("")
    }

    const handleSave = async () => {
        console.log(user.id);
        const data = await fetcher(users_url(user.id), {method: "PATCH", body: {avatar: imgUrl}})
        setUser(data.user)
        dispatch(registerSuccess(data.user))
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

export default connect(null, (dispatch) => ({dispatch}) )(ProfileAvatarModal)