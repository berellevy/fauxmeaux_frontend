import React from 'react'
import { Card, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getSinglePost, showPostFrontend, views_url } from '../redux/actions'
import { fetcher } from '../helpers/Fetcher'
import pluralize from 'pluralize'
import VizSensor from 'react-visibility-sensor';
import UserLink from './UserLink'

const AdCard = ({view, showPost, getSinglePost}) => {

    const { id, ad, metrics} = view
    const { comments, views, user } = metrics
    const clickHandler = () => {
        fetcher(views_url + "/" + id, { method: "PATCH", body: {ad_view: false} })
        showPost(id)
    }

    const handleViewChange = (isVisible) => {
        if (isVisible) {
            getSinglePost(id)
        }
    }

    return (
        
        <VizSensor onChange={handleViewChange}>
            <span>
                <Card.Header as="h4" style={{backgroundColor: "lightgreen"}}>
                    Ad
                    <UserLink user={user} style={{float: "right"}} />
                </Card.Header>
                <Card.Img src={ad.img} onClick={clickHandler}/>
                <ListGroupItem style={{backgroundColor: "lightgreen"}}>
                    Visit <Card.Link href="www.logo.com">lego.com</Card.Link>
                    <span style={{float: "right"}}>
                        {[!comments ? null : pluralize("comment", comments, true) , !views ? null : pluralize("view", views, true) ].filter(i=>i).join(' and ')}
                    </span>
                </ListGroupItem>
            </span> 
        </VizSensor>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPost: (view_id) => dispatch(showPostFrontend(view_id)),
        getSinglePost: (view_id) => dispatch(getSinglePost(view_id))
    }
}


export default connect(null, mapDispatchToProps)(AdCard)