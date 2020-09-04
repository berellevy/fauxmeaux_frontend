import React from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PostCommentsContainer from '../containers/PostCommentsContainer';
import { NavLink } from 'react-router-dom';
import { posts_url } from '../redux/actions';
import AddComment from './AddComment';
import getTimeAgo from '../helpers/getTimeAgo'




function Post({post}) {
    let { text, img, user, id, comments} = post
    let imgSrc = () => img ? img : "https://placeholder.pics/svg/500/DEDEDE/555555/no%20image"

    let userHeader = () => {
        return (
            !post.user 
            ? null
            : <Card.Header>{user.username}</Card.Header>
        )
    }
    return (
        <span>
            {userHeader()}
            <NavLink to={"/posts/" + id} >
                <Card.Img src={imgSrc()}/>
            </NavLink>
            <Card.Body>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <PostCommentsContainer comments={comments} />
                </ListGroupItem>
                <ListGroupItem>
                    <AddComment post_id={id}/>
                </ListGroupItem>
            </ListGroup>
        </span>
    )
}


export default Post