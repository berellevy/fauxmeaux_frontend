import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchUserPosts } from '../redux/actions'
import { Col } from 'react-bootstrap'


class Profile extends Component {

    componentDidMount() {
        let { username } = this.props
        this.props.fetchUserPosts(username)
    }
    posts = () => this.props.posts.map(post => <Post post={post} />)
    render() {
        return (
            <Col>
                {this.posts()}
            </Col>
        )

    }
}

const mapStateToProps = (state) => {
    return {posts: state.profilePosts}
}

const mapDispatchToProps = (dispatch) => {
    return { fetchUserPosts: (username) => dispatch(fetchUserPosts(username))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)