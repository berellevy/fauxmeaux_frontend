import React from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PostCommentsContainer from '../containers/PostCommentsContainer';

const rowStyle = {
    marginTop: "3em"
}


function Post({post}) {
    let { text, img, user } = post
    let imgSrc = img ? img : "https://placeholder.pics/svg/500/DEDEDE/555555/no%20image"
    return (
        <Row style={rowStyle}>
            <Col sm={3}/>
            <Col>
                <Card>
                    <Card.Header>{user.username}</Card.Header>
                    <Card.Img src={imgSrc}/>
                    <Card.Body>
                        <Card.Text>{text}</Card.Text>
                    </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <PostCommentsContainer />
                            </ListGroupItem>
                        </ListGroup>
                    
                </Card>
            </Col>
            <Col sm={3}/>
        </Row>
    )
}


export default Post