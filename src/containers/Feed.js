import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'


class Feed extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    posts = () => this.props.posts.map(post => <Post post={post} />)
    render() {
        return (
            <Row>
                <Col sm={2}/>
                <Col>
                    {this.posts()}
                </Col>
                <Col sm={2} />
            </Row>
        )

    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

const mapDispatchToProps = (dispatch) => {
    return { fetchPosts: () => dispatch(fetchPosts())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)