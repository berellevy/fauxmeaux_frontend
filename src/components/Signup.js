import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../redux/actions'


class Signup extends Component {
    
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
        let { user } = this.props
        return (
            user.loggedIn 
            ? <Redirect to="/"/> 
            : <div>
                <h1>Signup</h1>
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
                    <input type="submit" value="signup" />
                </form>
                <NavLink to="/login">
                    Login
                </NavLink>
            </div>
        ) 
    }


}

const mapDispatchToProps = (dispatch) => {
    return { submitHandler: (user) => dispatch(login(user))}
}

const mapStateToProps = (state) => {
    return { user: state }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup)