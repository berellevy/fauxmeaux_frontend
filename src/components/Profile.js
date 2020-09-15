import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import ProfileFeed from '../containers/ProfileFeed'
import { base_url, getFollows } from '../redux/actions'
import { NavLink, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetcher } from '../helpers/Fetcher'
import ProfileAvatar from './ProfileAvatar'

const postsContainerStyle = {
    marginTop: "3em",
    borderTop: "2px solid lightgrey"

}

const Profile = (props) => {

    const { username } = props.match.params

    let [user, setUser] = useState({})
    useEffect(() => {
        fetcher(base_url + "/" + username)
        .then(data=> setUser(data.user))
        },[username])

    const handleFollowClick = () => {
        fetcher(base_url + "/togglefollow", {method: "POST", body: {username: username}})
        .then(data=>setUser(data))
    } 

    const handleFollowsClick = (e, type) => {
        e.preventDefault()
        let username_and_type = username + "/" + type
        props.getFollows(username_and_type)
        props.history.push("/users")
    }

    const followButton = () => {
        return (
            <Button onClick={handleFollowClick} variant="light">
                {!user.followed_by_current_user ? "follow" : "following"}
            </Button>
        )
    }

    return (
        <>
            <Row id="user-headers" style={{marginTop: "3em"}}>
                <Col sm={4}>
                    <ProfileAvatar user={user} setUser={setUser} />
                </Col>
                <Col sm={1}/>
                <Col sm={7}>

                    <Row 
                        style={{margin: "5px"}}
                    >
                        <Col>
                            <h1>{username}</h1>
                        </Col>

                        {
                            user.is_current_user
                            ? <><Col/><Col/></>
                            : <><Col>
                            {followButton()}
                            </Col>
                            <Col>
                            {user.follows_current_user ? <h3>Follows you</h3> : null}
                            </Col></>

                        }
                    </Row>
                    <Row>
                        <Col>
                            <h4>{user.posts_qty} Posts</h4>
                        </Col>
                        <Col>
                            <NavLink to="#" onClick={(e) => handleFollowsClick(e,"followers")}>
                                <h4>{user.followers_qty} Followers</h4>
                            </NavLink>
                        </Col>
                        <Col>
                            <NavLink to="#" onClick={(e) => handleFollowsClick(e, "followees")}>
                                <h4>{user.following_qty} Following</h4>
                            </NavLink>
                        </Col>
                    </Row>


                </Col>
            </Row>
            <Row id="user-posts" style={postsContainerStyle}>
                <Col>
                <Row id="posts-headers">
                    <h1>Posts</h1>
                </Row>
                <ProfileFeed username={username}/>
                </Col>
            </Row>
            
        </>
    )  
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.user.username,
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return { getFollows: (username_and_type) => dispatch(getFollows(username_and_type))}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Profile)