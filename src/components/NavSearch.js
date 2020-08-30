import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'


class NavSearch extends Component {
    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        )
    }
}


export default NavSearch