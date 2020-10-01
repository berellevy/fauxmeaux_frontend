import React, { useState, useEffect } from 'react'
import View from '../components/View'
import { Col, Row } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher'
import { posts_url } from '../helpers/urls'

const SinglePostPage = ({ match }) => {

    const [view, setView] = useState(null)
    
    useEffect(() => {
        (async () => {
            const data = await fetcher(posts_url(match.params.id))
            setView(data)
        })()
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