import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions'


class Feed extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    posts = () => this.props.posts.map(post => <Post post={post} />)
    render() {
        return (
            <div>
                <ul>
                    {this.posts()}
                </ul>
            </div>
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