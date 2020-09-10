import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../redux/actions'
import { Container, Card, Form, FormControl, Row, Button } from 'react-bootstrap'
import Logo from '../icons/Logo'

const cardStyle = {
    width: '18rem', 
    minHeight: "1px", 
    margin: "0.5rem auto"
}

class Signup extends Component {
    
    state = {
        username: "",
        password: ""
    }

    errorMessages = () => {
        let errors = this.props.user.errors 
        ? Object.entries(this.props.user.errors).map(fieldArr=> {
            return fieldArr[1].map(message=> {
                console.log(message);
                return <Card.Body>{fieldArr[0]} {message}</Card.Body>
        })
        })
        : null
        return errors
    }

    changeHandler = ( e ) => this.setState({ [e.target.name]: e.target.value })

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler({user: this.state})
    }


    
    render() {
        let { username, password } = this.state
        let { user } = this.props
        return (
            user.loggedIn 
            ? <Redirect to="/"/> 
            : <Container fluid="sm">
                <Row style={{height: "5rem"}} />

                <Row >
                    <Card style={cardStyle} >
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
                                    Sign Up
                                </Button>
                                <Form.Text className="text-muted">
                                    By signing up, you agree to buy me lunch.
                                </Form.Text>
                            </Form>
                            {this.errorMessages()}
                        </Card.Body>
                    </Card>
                </Row>

                <Row>
                    <Card style={cardStyle}>
                        <Card.Body style={{padding: "7px"}}>
                            Have an account? <NavLink to="/login">Log in</NavLink>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        ) 
    }


}

const mapDispatchToProps = (dispatch) => {
    return { submitHandler: (user) => dispatch(signup(user))}
}

const mapStateToProps = (state) => {
    return { user: state.user }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)