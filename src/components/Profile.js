import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import defaultImg from '../helpers/defaultImg'
import { connect } from 'react-redux'
import ProfileFeed from '../containers/ProfileFeed'
import { Component } from 'react'
import { base_url, headers, getFollows } from '../redux/actions'
import { NavLink, withRouter } from 'react-router-dom'
import { compose } from 'redux'



const postsContainerStyle = {
    marginTop: "3em",
    borderTop: "2px solid lightgrey"

}



class Profile extends Component {

    state = {
        user: {}
    }

    followButton = () => {
        return (
            !this.state.user.followed_by_current_user
            ? <Button onClick={this.handleFollowClick} variant="light">
                follow
            </Button>
            : <Button onClick={this.handleFollowClick} variant="light">
                following
            </Button>
        )
    }

    handleFollowClick = () => {
        fetch(base_url + "/togglefollow", {
            method: "POST", 
            headers: headers(), 
            body: JSON.stringify({ username: this.username()}) 
        })
        .then(response=> response.json())
        .then(data=>this.setState({user: data}))
    } 





    username = () => this.props.match.params.username
    
    componentDidMount () {
        this.getUser()
    }

    componentDidUpdate () {
        if (this.username() !== this.state.user.username) {
            this.getUser()
        }
    }

    getUser = () => {
        fetch(base_url + "/" + this.username(), {headers: headers()})
        .then(response=>response.json())
        .then(data=> {
            this.setState({ user: data.user })
        }) 
    }

    handleFollowsClick = (e, type) => {
        e.preventDefault()
        let username_and_type = this.username() + "/" + type
        this.props.getFollows(username_and_type)
        this.props.history.push("/users")
    }


    
    render () {
        
        let { username, avatar, posts_qty, followers_qty, following_qty, follows_current_user, is_current_user } = this.state.user

        return (
            <>
                <Row id="user-headers" style={{marginTop: "3em"}}>
                    <Col sm={4}>
                        <Image src={defaultImg(avatar)} fluid roundedCircle/>
                    </Col>
                    <Col sm={1}/>
                    <Col sm={7}>
    
                        <Row 
                            style={{margin: "5px"}}
                        >
                            <Col>
                                <h1>{this.username()}</h1>
                            </Col>
                            <Col>
                                {
                                    is_current_user
                                    ? null
                                    : this.followButton()
                                }
                            </Col>
                            <Col>
                            {
                                    is_current_user
                                    ? null
                                    : follows_current_user
                                        ? <h3>Follows you</h3>
                                        : null
                                }
                            </Col>
                        </Row>
    
                        <Row>
                            <Col>
                                <h4>{posts_qty} Posts</h4>
                            </Col>
                            <Col>
                                <NavLink to="#" onClick={(e) =>this.handleFollowsClick(e,"followers")}>
                                    <h4>{followers_qty} Followers</h4>
                                </NavLink>

                            </Col>
                            <Col>
                                <NavLink to="#" onClick={(e) =>this.handleFollowsClick(e, "followees")}>
                                <h4>{following_qty} Following</h4>
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
                    <ProfileFeed username={this.username()}/>
                    </Col>
                </Row>
                
            </>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {
    return {
        username: state.user.username,
        props: ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return { getFollows: (username_and_type) => dispatch(getFollows(username_and_type))}
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Profile)