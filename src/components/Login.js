import React, { Component } from 'react'
import { login } from '../redux/actions'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'


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

    loginError = () => this.props.user.error ? <p>{this.props.user.error}</p> : <p><br></br></p>

    render() {
        let { username, password } = this.state
        let { user } = this.props
        return (
            user.loggedIn 
            ? <Redirect to="/"/> 
            : <div>
                <h1>Login</h1>
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
                { this.loginError() }

                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </div>
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