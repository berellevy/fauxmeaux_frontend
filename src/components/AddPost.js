import React, { useState } from 'react'
import { Col, Row, Card, Form, Button } from 'react-bootstrap'
import { posts_url } from '../redux/actions'
import { withRouter } from 'react-router-dom'
import { fetcher } from '../helpers/Fetcher'
import imgPreviewSrc from '../helpers/imgPreviewSrc'

const AddPost = ({history}) => {

    const [imgUrl, setImgUrl] = useState(null);
    const [text, setText] = useState(null);

    // backend doesn't send error responses yet lol

    // const [errors, setErrors] = useState({});

    // const errorMessage = (fieldName) => { 
    //     return (
    //         errors[fieldName]
    //         ? null
    //         : <Form.Text style={{color: "red"}}>
    //             {errors[fieldName]}
    //         </Form.Text>
    //     )
    // }

    const submitHandler = (e) => {
        e.preventDefault()
        let post = { text, img: imgUrl }
        fetcher( posts_url, {method: "POST", body: post} )
        .then( view => history.push(`/posts/${view.post.id}`) )
    }

    return (
        <Row style={{marginTop: "3em"}}>
            <Col sm={3}></Col>
            <Col>
                <Card>
                    <Card.Header>
                        Add a Post
                    </Card.Header>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="formBasicEmail">
                            <Card.Img src={imgPreviewSrc(imgUrl)}/>
                            <Form.Control
                                type="url" 
                                placeholder="image url" 
                                value={imgUrl}
                                onChange={(e)=>setImgUrl(e.target.value)}
                            />
                            {/* {errorMessage("imgUrl")} */}
                        </Form.Group>
                        
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control
                            name="text" 
                            type="textArea" 
                            placeholder="O share with us you geniosity" 
                            value={text}
                            onChange={(e)=>setText(e.target.value)}
                        />
                        {/* {errorMessage("text")} */}
                        <Button variant="light" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card>
            </Col>
            <Col sm={3}></Col>
        </Row>
    )
}

export default withRouter(AddPost)