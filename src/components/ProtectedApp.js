import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Feed from '../containers/Feed'
import Navbar from './Navbar'
import { connect } from 'react-redux'


function ProtectedApp(props) {
    let {loggedIn} = props.user
    return (
        !loggedIn
        ? <Redirect to="/login" />
       : <>
            <Navbar />
            <Switch>
                <Route path="/">
                    <Feed />
                </Route>
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(ProtectedApp)