import React from 'react'
import { Card, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getSinglePost, showPostFrontend, views_url } from '../redux/actions'
import { fetcher } from '../helpers/Fetcher'
import VizSensor from 'react-visibility-sensor';

const AdCard = ({ad, view_id, showPost, getSinglePost}) => {
    const clickHandler = () => {
        fetcher(views_url + "/" + view_id, { method: "PATCH", body: {ad_view: false} })
        showPost(view_id)
    }

    const handleViewChange = (isVisible) => {
        if (isVisible) {
            getSinglePost(view_id)
        }
    }

    return (
        
        <VizSensor onChange={handleViewChange}>
            <span>
                <Card.Header as="h4" >
                    Ad
                </Card.Header>
                <Card.Img src={ad.img} onClick={clickHandler}/>
                <ListGroupItem>
                    Visit <Card.Link href="www.logo.com">lego.com</Card.Link>
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