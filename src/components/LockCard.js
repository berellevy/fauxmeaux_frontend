import React from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import pluralize from 'pluralize'
import { unlockView } from '../redux/actions';
import UserLink from './UserLink';
import { CompAge } from './CompAge';

const LockCard = ({ metrics, unlockView, showAd }) => {
    
    let clickHandler = (e) => {
        let { view_id } = metrics
        showAd(view_id)
        unlockView(view_id)
    }

    let { comments, views, user, post_date } = metrics
    return (
        <span>
            <Card.Header>
                <UserLink user={user}/><CompAge date={post_date} />
            </Card.Header>
            <Card.Img src="http://placeholder.pics/svg/550/DEDEDE/555555/Unlock" onClick={clickHandler} />
                {!comments ? null : <Card.Text>{pluralize("comment", comments, true)}</Card.Text> }
                {!views ? null : <Card.Text>{pluralize("view", views, true)}</Card.Text> }
        </span>  
        
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return {
        unlockView: (view_id) => dispatch(unlockView(view_id)),
        showAd: (view_id) => dispatch({type: "SHOW_AD", payload: view_id})
    }
}

export default connect(null, mapDispatchToProps)(LockCard)