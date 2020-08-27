import React from 'react';
import './App.css';
import Feed from './containers/Feed';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      
    
      <Navbar />
      <Login />
      <Switch>
        {/* <Route path="/" render={() => <Feed /> }/> */}
      </Switch>
    </div>
  );
}

export default App;
