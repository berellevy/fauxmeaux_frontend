import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Feed from '../containers/Feed'
import NavBar from './Navbar'
import { Container } from 'react-bootstrap'
import AddPost from './AddPost'
import SinglePostPage from '../containers/SinglePostPage'
import { connect } from 'react-redux'
import Profile from './Profile'
import UserList from '../containers/UserList'



const ProtectedApp = ({user}) => {
    const {loggedIn} = user
    return (
        !loggedIn
            ? <Redirect to="/login" />
            : <Container fluid="sm" >

                <NavBar user={user} />

                <Switch>
                    <Route path="/posts/:id" component={SinglePostPage}/>

                    <Route path="/post">
                        <AddPost />
                    </Route>

                    <Route path="/profile" >
                        <Profile />
                    </Route>

                    <Route path="/users">
                        <UserList/>
                    </Route>

                    <Route path="/:username" component={Profile}/>

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