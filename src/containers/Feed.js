import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/asyncActions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const Feed = ({ posts, fetchPosts, fetchPostsPage }) => {
        const [page, setPage] = useState(1)

        useEffect(() => {
            fetchPosts()
        }, [fetchPosts])

        useBottomScrollListener(() => {
            fetchPosts(page)
            setPage(page + 1)
        })

        return ( 
            <Row>
                <Col sm = { 3 }/> 
                <Col> {
                    posts.map((view, i) => < View key = {i} view = { view }/>)} 
                </Col> 
                <Col sm = { 3 }/> 
            </Row>
        )
    }

    const mapDispatchToProps = (dispatch) => ({ fetchPosts: (page_num) => dispatch(fetchPosts(page_num)) })

    export default connect( ({posts}) => ({posts}), mapDispatchToProps)(Feed)