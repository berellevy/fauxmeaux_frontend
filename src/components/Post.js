import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PostCommentsContainer from '../containers/PostCommentsContainer';
import { NavLink } from 'react-router-dom';
import AddComment from './AddComment';
import VizSensor from 'react-visibility-sensor';
import UserLink from './UserLink';
import { fetcher } from '../helpers/Fetcher'
import { CompAge } from './CompAge';
import { views_url } from '../helpers/urls';



const Post = ({ view }) => {
    let { is_young, viewed, is_own_post, post } = view
    let { text, img, user, id, comments, updated_at} = post

    const [isViewed, setViewed] = useState(viewed)
    
    let imgSrc = () => img ? img : "https://placeholder.pics/svg/600/DEDEDE/555555/no%20image"

    let userHeader = () => !post.user ? null : <Card.Header><UserLink user={user}/><CompAge date={updated_at}/></Card.Header>
    
    let handleViewChange = (isVisible) => {
        if (!isViewed && !is_own_post && is_young && isVisible) {
            setViewed(true)
            fetcher(views_url(view.id), {method: 'PATCH', body: {viewed: true}})
        }
    }

    return (
        <VizSensor onChange={handleViewChange} >
            <span>
                {userHeader()}
                <NavLink to={"/posts/" + id} > <Card.Img src={imgSrc()}/> </NavLink>
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
        </VizSensor>
    )
}


export default Post