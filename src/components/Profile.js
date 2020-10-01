import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import ProfileFeed from '../containers/ProfileFeed'
import { getFollows } from '../redux/asyncActions'
import { NavLink } from 'react-router-dom'
import { fetcher } from '../helpers/Fetcher'
import ProfileAvatar from './ProfileAvatar'
import { base_url } from '../helpers/urls'

const postsContainerStyle = {
    marginTop: "3em",
    borderTop: "2px solid lightgrey"
}

const Profile = ({getFollows, history, match}) => {
    const { username } = match.params
    let [user, setUser] = useState({})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        (async () => {
            const data = await fetcher(base_url(username))
            setUser(data.user)
        })()
        },[username])

    const handleFollowClick =  async () => {
        const data = await fetcher(base_url('togglefollow'), {method: "POST", body: {username: username}})
        setUser(data)
    } 

    const handleFollowsClick = (e, type) => {
        e.preventDefault();
        getFollows(`${username}/${type}`);
        history.push("/users");
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
                <Col sm={4}> <ProfileAvatar user={user} setUser={setUser} /> </Col>
                <Col sm={1}/>
                <Col sm={7}>
                    <Row style={{margin: "5px"}}>
                        <Col> <h1>{username}</h1> </Col>
                        {user.is_current_user
                            ? <><Col/><Col/></>
                            : <>
                                <Col> {followButton()} </Col>

                                <Col> {user.follows_current_user ? <h3>Follows you</h3> : null} </Col>
                            </>}
                    </Row>
                    <Row>
                        <Col> <h4>{user.posts_qty} Posts</h4> </Col>
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
                    <Row id="posts-headers"> <h1>Posts</h1> </Row>
                    <ProfileFeed username={username}/>
                </Col>
            </Row>
            
        </>
    )  
}

const mapDispatchToProps = (dispatch) => {
    return { getFollows: (username_and_type) => dispatch(getFollows(username_and_type))}
}

export default connect(null, mapDispatchToProps)(Profile)