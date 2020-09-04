import React, { useState } from 'react'
import { Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PostCommentsContainer from '../containers/PostCommentsContainer';
import { NavLink } from 'react-router-dom';
import { posts_url, views_url, headers } from '../redux/actions';
import AddComment from './AddComment';
import getTimeAgo from '../helpers/getTimeAgo'
import VizSensor from 'react-visibility-sensor';




function Post({post, view}) {
    let { is_young, viewed } = view
    const [isViewed, setViewed] = useState(viewed)
    let { text, img, user, id, comments} = post
    let imgSrc = () => img ? img : "https://placeholder.pics/svg/600/DEDEDE/555555/no%20image"

    let userHeader = () => {
        return (
            !post.user 
            ? null
            : <Card.Header>{user.username}</Card.Header>
        )
    }
    let handleViewChange = (isVisible) => {
        if (!isViewed && is_young && isVisible) {
            setViewed(true)
            fetch( views_url + "/" + view.id, {
                method: "PATCH",
                headers: headers(),
                body: JSON.stringify({viewed: true})
            })
            .then(response=>response.json())
            .then(console.log)
        }
    }

    // if (isViewed) {
    //     console.log(view.id);
        
    // }

    return (
        <span>
            <VizSensor
                onChange={handleViewChange}
            >
                <>
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
                </>
            </VizSensor>
        </span>
    )
}


export default Post