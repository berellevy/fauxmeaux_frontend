import React from 'react'
import { Row, Col, Image, Button } from 'react-bootstrap'
import defaultImg from '../helpers/defaultImg'
import { connect } from 'react-redux'
import ProfileFeed from '../containers/ProfileFeed'
import { Component } from 'react'
import { base_url, headers } from '../redux/actions'



const postsContainerStyle = {
    marginTop: "1em",
    borderTop: "1px solid lightgrey"

}



class Profile extends Component {

    state = {
        user: {}
    }

    isCurrentUser = () => !this.props.match

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





    username = () => {
        return (
            this.isCurrentUser()
            ? this.props.username
            : this.props.match.params.username
        )
    }
    
    componentDidMount () {
        fetch(base_url + "/" + this.username(), {headers: headers()})
        .then(response=>response.json())
        .then(data=> {
            this.setState({ user: data.user })
        })
    }


    
    
    
    render () {
        console.log(this.state.user);
        let { name, username, avatar, bio, posts_qty, followers_qty, following_qty, follows_current_user } = this.state.user
        return (
            <>
                <Row id="user-headers">
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
                                    this.isCurrentUser()
                                    ? null
                                    : this.followButton()
                                }
                            </Col>
                            <Col>
                            {
                                    this.isCurrentUser()
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
                                <h4>{followers_qty} Followers</h4>
                            </Col>
                            <Col>
                                <h4>{following_qty} Following</h4>
                            </Col>
                        </Row>
    
    
                    </Col>
                </Row>
    
                <Row id="user-posts" style={postsContainerStyle}>
                    <Row id="posts-headers">
                        <h1 className="text-center">
                            Posts
                        </h1>
                    </Row>
                    <Row>
                        <ProfileFeed username={this.username()}/>
                    </Row>
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

export default connect(mapStateToProps)(Profile)