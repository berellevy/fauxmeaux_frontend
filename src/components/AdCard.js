import React from 'react'
import { Card, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { views_url } from '../redux/actions'
import { fetcher } from '../helpers/Fetcher'

const AdCard = ({ad, view_id, showPost}) => {
    const clickHandler = () => {
        showPost(view_id)
        fetcher(views_url + "/" + view_id, { method: "PATCH", body: {locked: "unlocked"} })
    }

    return (
        <span>
            <Card.Header as="h4" >
                Ad
            </Card.Header>
            <Card.Img src={ad.img} onClick={clickHandler}/>
            <ListGroupItem>
                Visit <Card.Link href="www.logo.com">lego.com</Card.Link>
            </ListGroupItem>
        </span>
    ) 
}

const mapDispatchToProps = (dispatch) => ({showPost: (view_id) => dispatch({type: "SHOW_POST", payload: view_id})})


export default connect(null, mapDispatchToProps)(AdCard)