import React from 'react'
import { Card, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { showPostBackend } from '../redux/actions'
import { views_url, headers } from '../redux/actions'


function AdCard({ad, view_id, showPost}) {
    const clickHandler = () => {
        showPost(view_id)
        fetch( views_url + "/" + view_id, {
            method: "PATCH",
            headers: headers(),
            body: JSON.stringify({locked: "unlocked"})
        })
    }

    return (
        <span>
            <Card.Header bg="primary" as="h4" >
                Ad
            </Card.Header>
            <Card.Img src={ad.img} onClick={clickHandler}/>
            <ListGroupItem>
                Visit <Card.Link href="www.logo.com">lego.com</Card.Link>
            </ListGroupItem>
        </span>
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        showPostBackend: (view_id) => dispatch(showPostBackend(view_id)),
        showPost: (view_id) => dispatch({type: "SHOW_POST", payload: view_id})
    }
}

export default connect(null, mapDispatchToProps)(AdCard)