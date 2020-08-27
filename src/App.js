import React from 'react';
import './App.css';
import Feed from './containers/Feed';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import { PrivateRoute, loggedIn } from './auth/Auth';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      
    
      <Navbar />
      
      <Switch>
        <Route path="/login">
          { loggedIn() ? <Redirect to="/"/> : <Login /> }
        </Route>
        <Route path="/signup">
          { loggedIn() ? <Redirect to="/"/> : <Signup /> }
        </Route>
        <PrivateRoute path="/" component={Feed}/>
      </Switch>
    </div>
  );
}

export default App;
