import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions'
import { Col, Row } from 'react-bootstrap'
import View from '../components/View'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';


const Feed = ({ views, fetchPosts, fetchPostsPage }) => {
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
                    views.map((view, i) => < View key = {i} view = { view }/>)} 
                </Col> 
                <Col sm = { 3 }/> 
            </Row>
        )
    }

    const mapStateToProps = (state) => {
        return { views: state.posts }
    }

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchPosts: (page_num) => dispatch(fetchPosts(page_num))
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Feed)