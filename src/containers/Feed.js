import React, { Component } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'


class Feed extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }
    views = () => this.props.views.map((view) => <View view={view} />)
    render() {
        return (
            <Row>
                <Col sm={3}/>
                <Col>
                    {this.views()}
                </Col>
                <Col sm={3} />
            </Row>
        )

    }
}

const mapStateToProps = (state) => {
    return {views: state.posts}
}

const mapDispatchToProps = (dispatch) => {
    return { fetchPosts: () => dispatch(fetchPosts())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)