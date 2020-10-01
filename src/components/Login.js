import React, { Component } from 'react'
import { login } from '../redux/asyncActions'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { Container, Row, Card, Form, FormControl, Button } from 'react-bootstrap'
import Logo from '../icons/Logo'

const cardStyle = {
    width: '18rem', 
    minHeight: "1px", 
    margin: "0.5rem auto"
}

class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = ( e ) => this.setState({ [e.target.name]: e.target.value }) 

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler({user: this.state})
    }

    loginError = () => this.props.user.error ? <p>{this.props.user.error}</p> : null

    render() {
        let { username, password } = this.state
        let { user } = this.props
        return (
            user.loggedIn 
            ? <Redirect to="/"/> 
            : <Container fluid="sm">
                <Row style={{height: "5rem"}} />
                <Row >
                    <Card style={cardStyle}>
                        <Card.Header><Logo large={true}/></Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.submitHandler}>
                                <Form.Group>
                                    <FormControl 
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        value={username}
                                        onChange={this.changeHandler}
                                        size="sm"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <FormControl
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        value={password}
                                        onChange={this.changeHandler}
                                        size="sm"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" size="sm" block>
                                    Log In
                                </Button>
                                <Form.Text className="text-muted">
                                    By logging in, you agree to buy me supper.
                                </Form.Text>
                            </Form>
                            { this.loginError() }
                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <Card style={cardStyle}>
                        <Card.Body style={{padding: "7px"}}>
                            Don't have an account? <NavLink to="/signup">Sign up</NavLink>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { submitHandler: (user) => dispatch(login(user))}
}

const mapStateToProps = (state) => {
    return { user: state.user }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)