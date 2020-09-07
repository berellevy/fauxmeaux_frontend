import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedApp from './components/ProtectedApp';
import { connect } from 'react-redux';
import { register } from './redux/actions'

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup /> 
          </Route>
          <Route path="/" component={ProtectedApp}/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

const mapDispatchToProps = (dispatch) => {
  return { register: dispatch(register())}
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
