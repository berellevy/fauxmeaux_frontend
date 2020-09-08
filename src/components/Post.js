import React, { useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import PostCommentsContainer from '../containers/PostCommentsContainer';
import { NavLink } from 'react-router-dom';
import { views_url } from '../redux/actions';
import AddComment from './AddComment';
import VizSensor from 'react-visibility-sensor';
import UserLink from './UserLink';
import { headers } from '../helpers/Fetcher'



const Post = ({post, view}) => {
    let { is_young, viewed, is_own_post } = view
    let { text, img, user, id, comments} = post

    const [isViewed, setViewed] = useState(viewed)
    
    let imgSrc = () => img ? img : "https://placeholder.pics/svg/600/DEDEDE/555555/no%20image"

    let userHeader = () => !post.user ? null : <Card.Header><UserLink user={user}/></Card.Header>
    
    let handleViewChange = (isVisible) => {
        if (!isViewed && !is_own_post && is_young && isVisible) {
            setViewed(true)
            fetch( views_url + "/" + view.id, {
                method: "PATCH",
                headers: headers(),
                body: JSON.stringify({viewed: true})
            })
            .then(response=>response.json())
        }
    }

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