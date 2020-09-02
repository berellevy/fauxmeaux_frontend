import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchUserPosts } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'


class Profile extends Component {
    componentDidMount() {
        let { username } = this.props
        this.props.fetchUserPosts(username)
    }

    views = () => this.props.views.map(view => <View view={view} />)
    render() {
        return (
                <Row>
                    <Col sm={2}/>
                    <Col>
                        {this.views()}
                    </Col>
                    <Col sm={2}/>
                </Row>
                
        )

    }
}

const mapStateToProps = (state) => {
    return {views: state.profilePosts}
}

const mapDispatchToProps = (dispatch) => {
    return { fetchUserPosts: (username) => dispatch(fetchUserPosts(username))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)