import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { submitComment } from '../redux/actions'
import { connect } from 'react-redux'


class AddComment extends Component {

    state = { text: "" }

    submitHandler = (e) => {
        e.preventDefault()
        let comment = { ...this.state, post_id: this.props.post_id}
        this.props.submitComment(comment)
    }

    changeHandler = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    } 

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
                <Row>
                    <Col sm="10">
                        <Form.Control 
                            type="text"
                            placeholder="add comment"
                            name = "text"
                            value = {this.state.text}
                            onChange = {this.changeHandler}
                        />
                    </Col>

                    <Button variant light type="submit">
                        submit
                    </Button>
                </Row>
                
            </Form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { submitComment: (comment) => dispatch(submitComment(comment)) }
}


export default connect(null, mapDispatchToProps)(AddComment) 