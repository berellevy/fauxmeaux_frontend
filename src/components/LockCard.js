import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'
import pluralize from 'pluralize'
import { unlockView } from '../redux/actions';

function LockCard({ metrics, unlockView }) {
    
    let clickHandler = (e) => {
        let { view_id } = metrics
        unlockView(view_id)
    }

    let { comments, views, user } = metrics
    return (
        <Card onClick={clickHandler}>
            <Card.Header>
                {user.username}
            </Card.Header>
            <Card.Img src="http://placeholder.pics/svg/400x500/DEDEDE/555555/Unlock" />
            
                {!comments ? null : <Card.Text>{pluralize("comment", comments, true)}</Card.Text> }
                {!views ? null : <Card.Text>{pluralize("view", views, true)}</Card.Text> }
            
        </Card>
        
    ) 
}

const mapDispatchToProps = (dispatch) => {
    return { unlockView: (view_id) => dispatch(unlockView(view_id))}
}

export default connect(null, mapDispatchToProps)(LockCard)