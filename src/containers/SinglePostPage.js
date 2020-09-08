import React from 'react'
import { Component } from 'react'
import { posts_url } from '../redux/actions'
import View from '../components/View'
import { Col, Row } from 'react-bootstrap'
import { fetcher } from '../helpers/Fetcher'

class SinglePostPage extends Component {

    state = {view: null}
    
    componentDidMount() {
        fetcher(posts_url + "/" +this.props.match.params.id)
        .then(data => this.setState({view: data}))
    }

    render () {
        return (
            <Row>
                <Col sm={3} />
                <Col>
                    {this.state.view
                    ? <View view={this.state.view} />
                    : null}
                </Col>
                <Col sm={2} />
            </Row>
        )
    }
}


export default SinglePostPage