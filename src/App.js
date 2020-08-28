import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import { PrivateRoute } from './auth/Auth';
import Signup from './components/Signup';
import ProtectedApp from './components/ProtectedApp';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {

  }
  
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





export default connect(mapStateToProps)(App) ;
