import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import SearchIcon from '../icons/SearchIcon'
import { submitSearch } from '../redux/actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'


class NavSearch extends Component {

    state = { query: "" }
    
    searchHandler = (e) => {
        e.preventDefault()
        this.props.submitSearch(this.state)
        this.setState({query: ""})
        this.props.history.push("/users")
    }

    handleChange = (e) => this.setState({[e.target.name]: e.target.value})
    
    render() {
        return (
            <Form inline onSubmit={this.searchHandler}>
                <FormControl
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <Button type="submit" variant="outline-success"><SearchIcon/></Button>
            </Form>
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return { submitSearch: (query) => dispatch(submitSearch(query))}
}

export default compose(
    withRouter,
    connect(null, mapDispatchToProps)
)(NavSearch)
