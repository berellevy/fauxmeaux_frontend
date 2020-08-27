import React, { Component } from 'react'
import { login } from '../redux/actions'
import { connect } from 'react-redux'


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

    render() {
        let { username, password } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    onChange={this.changeHandler}
                />
                <input 
                    type="text"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.changeHandler}
                />
                <input type="submit" value="login" />
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return { submitHandler: (user) => dispatch(login(user))}
}

export default connect(null, mapDispatchToProps)(Login)