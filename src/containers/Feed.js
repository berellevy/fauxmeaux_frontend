import React, { Component, useEffect, useState } from 'react'
import Post from '../components/Post'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostsPage } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const Feed = ({views, fetchPosts, fetchPostsPage}) => {
    const [page, setPage] = useState(1)

    useEffect(()=> {
        fetchPosts()
    }, [fetchPosts])
    
    useBottomScrollListener(() => {
        fetchPostsPage(page)
        setPage(page + 1)

    })

    return (
        <Row>
            <Col sm={3}/>
            <Col>
                {views.map((view) => <View view={view} />)}
            </Col>
            <Col sm={3} />
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {views: state.posts}
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        fetchPostsPage: (page_num) => dispatch(fetchPostsPage(page_num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)