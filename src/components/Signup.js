import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signup } from '../redux/actions'



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
                return <p>{fieldArr[0]} {message}</p>
        })
        })
        : <p><br/></p>
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
                {this.errorMessages()}
                <NavLink to="/login">
                    Login
                </NavLink>
            </div>
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