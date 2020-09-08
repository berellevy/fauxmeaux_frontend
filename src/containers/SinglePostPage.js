import React, { useState, useEffect } from 'react'
import { posts_url } from '../redux/actions'
import View from '../components/View'
import { Col, Row } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher'

const SinglePostPage = ({ match }) => {

    const [view, setView] = useState(null)
    
    useEffect(() => {
        fetcher(posts_url + "/" + match.params.id)
        .then(data => setView(data))
    },[match.params.id])
        
    return (
        <Row>
            <Col sm={3} />
            <Col>
                {view ? <View view={view} /> : null}
            </Col>
            <Col sm={2} />
        </Row>
    )
}

export default SinglePostPage