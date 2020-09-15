import React, { Component } from 'react'
import { Col, Row, Card, Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { submitPost, posts_url } from '../redux/actions'
import { Redirect } from 'react-router-dom'
import { fetcher } from '../helpers/Fetcher'
import imgPreviewSrc from '../helpers/imgPreviewSrc'

class AddPost extends Component {

    state = {
        imgUrl: "",
        text: "",
        errors: {
            imgUrl: null,
            text: null
        },
        newPostId: null
    }

    errorMessage = (fieldName) => { 
        return (
            !this.state.errors[fieldName]
            ? null
            : <Form.Text style={{color: "red"}}>
                {this.state.errors[fieldName]}
            </Form.Text>
        )
    }

    changeHandler = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        let { text, imgUrl } = this.state
        let post = { text: text, img: imgUrl }
        fetcher(posts_url, {method: "POST", body: post})
        .then(view=> {
            let { id } = view.post
            this.setState({newPostId: id})
        })

    }

    render() {
        return (
            this.state.newPostId
            ? <Redirect to={"/posts/" + this.state.newPostId} />
            : <Row style={{marginTop: "3em"}}>
                <Col sm={3}></Col>
                <Col>
                    <Card>
                        <Card.Header>
                            Add a Post
                        </Card.Header>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Card.Img src={imgPreviewSrc(this.state.imgUrl)}/>
                                <Form.Control
                                    name="imgUrl" 
                                    type="url" 
                                    placeholder="image url" 
                                    value={this.state.imgUrl}
                                    onChange={this.changeHandler}
                                />
                                {this.errorMessage("imgUrl")}
                            </Form.Group>
                            
                            <Form.Label>Post Content</Form.Label>
                            <Form.Control
                                name="text" 
                                type="textarea" 
                                placeholder="O share with us you geniosity" 
                                value={this.state.text}
                                onChange={this.changeHandler}
                            />
                            {this.errorMessage("text")}
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
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

const mapDispatchToProps = (dispatch) => {
    return { submitPost: (post) => dispatch(submitPost(post)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)