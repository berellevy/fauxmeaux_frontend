import React from 'react'
import { Component } from 'react'
import { posts_url, headers } from '../redux/actions'
import View from '../components/View'
import { Col, Row } from 'react-bootstrap'


class SinglePostPage extends Component {

    state = {
        view: null
    }
    
    componentDidMount() {
        fetch(posts_url + "/" +this.props.match.params.id, {headers: headers()})
        .then(response => response.json())
        .then(data => this.setState({view: data}))
        .catch(error => console.log(error))
        
    }

    view = () => {
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

    render () {
        return (
            this.view()
        )
    }
}


export default SinglePostPage