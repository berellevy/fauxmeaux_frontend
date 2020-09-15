import React from 'react'
import { Modal, Form, Image, Button } from 'react-bootstrap'


const ProfileAvatarModal = ({show, handleClose, imagePreviewSrc, imgUrl, changeHandler, handleSave}) => {



    const imgPreview = () => imagePreviewSrc || "https://placeholder.pics/svg/300/DEDEDE/555555/add%20an%20image" 

    return (
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
    )
}


export default ProfileAvatarModal