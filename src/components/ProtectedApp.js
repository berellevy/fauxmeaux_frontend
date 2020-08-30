import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Feed from '../containers/Feed'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { Container } from 'react-bootstrap'
import AddPost from './AddPost'


function ProtectedApp(props) {
    let {loggedIn} = props.user
    return (
        !loggedIn
        ? <Redirect to="/login" />
        : <Container fluid="sm">
            <NavBar />
            <Switch>
                <Route path="posts/:id">

                </Route>
                <Route path="/post">
                    <AddPost />
                </Route>
                <Route path="/">
                    <Feed />
                </Route>
            </Switch>
            </Container>
    )
}

const mapStateToProps = (state) => {
    return {user: state.user}
}

export default connect(mapStateToProps)(ProtectedApp)