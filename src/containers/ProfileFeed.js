import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchUserPosts, fetchUserPostsPage } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import { useEffect } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const Profile = ({username, views, fetchUserPosts, fetchUserPostsPage}) => {
    
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetchUserPosts(username)
    }, [fetchUserPosts, username])

    useBottomScrollListener(() => {
        fetchUserPostsPage(username, page)
        setPage(page + 1)

    })
    
    return (
        <Row>
            <Col sm={3}/>
            <Col sm={6}>
                {views.map(view => <View view={view} />)}
            </Col>
            <Col sm={3}/>
        </Row>    
    )
}

const mapStateToProps = (state) => {
    return {views: state.posts}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserPosts: (username) => dispatch(fetchUserPosts(username)),
        fetchUserPostsPage: (username, page_num) => dispatch(fetchUserPostsPage(username, page_num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)