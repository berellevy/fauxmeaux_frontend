import React, { Component } from 'react'
import { Col, Row, Card, Form, Button } from 'react-bootstrap'
import validURL from '../helpers/validUrl'
import { connect } from 'react-redux'
import { submitPost, posts_url } from '../redux/actions'
import { Redirect } from 'react-router-dom'
import { headers } from '../redux/actions'


class AddPost extends Component {

    state = {
        imgUrl: "",
        text: "",
        imgPreviewSrc: null,
        errors: {
            imgUrl: null,
            text: null
        },
        newPostId: null
    }



    imgPreview = () => {
        return this.state.imgPreviewSrc || "https://placeholder.pics/svg/500/DEDEDE/555555/add%20an%20image"
    }

    imgUrlChangeHandler = (e) => {
        let { value } = e.target
        this.changeHandler(e)
        if (validURL(value)) {
            this.setState({ imgPreviewSrc: value})  
        } else {
            this.setState({ imgPreviewSrc: null})
        }
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
        let { id } = this.props.user
        let post = { text: text, img: imgUrl }
        fetch(posts_url, {
            method: "POST",
            headers: headers(),
            body: JSON.stringify(post)
        })
        .then(response=>response.json())
        .then(view=> {
            let { id } = view.post
            console.log(post);
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
                                <Card.Img src={this.imgPreview()}/>
                                <Form.Control
                                    name="imgUrl" 
                                    type="url" 
                                    placeholder="image url" 
                                    value={this.state.imgUrl}
                                    onChange={this.imgUrlChangeHandler}
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