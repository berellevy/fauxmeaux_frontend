import React from 'react'
import { Modal, Form, Image, Button } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher';
import { users_url } from '../redux/actions';
import { connect } from 'react-redux';
import validURL from '../helpers/validUrl';


const ProfileAvatarModal = ({dispatch, user, setUser, show, setShow, imagePreviewSrc, setImagePreviewSrc, imgUrl, setImgUrl}) => {

    const changeHandler = (e) => {
        let { value } = e.target
        setImgUrl(value)
        if (validURL(value)) {
            setImagePreviewSrc(value)
        } else {
            setImagePreviewSrc(null)
        }
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

    const handleClose = () => {
        setShow(false)
        setImgUrl("")
        setImagePreviewSrc("")
    }

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

const mapDispatcToProps = (dispatch) => {
    return {dispatch: dispatch}
}


export default connect(mapDispatcToProps)( ProfileAvatarModal)