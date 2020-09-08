import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { submitComment } from '../redux/actions'
import { connect } from 'react-redux'
import { useState } from 'react'


const AddComment = ({post_id, submitComment}) => {

    let [text, setText] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()
        submitComment({ text, post_id })
        setText("")
    }

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col sm="10">
                    <Form.Control 
                        type="text"
                        placeholder="add comment"
                        value = {text}
                        onChange={ e => setText(e.target.value) }
                    />
                </Col>
                <Button variant="light" type="submit">
                    submit
                </Button>
            </Row>
            
        </Form>
    )
}

const mapDispatchToProps = (dispatch) => {
    return { submitComment: (comment) => dispatch(submitComment(comment)) }
}


export default connect(null, mapDispatchToProps)(AddComment) 