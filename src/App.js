import React,{ useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import { auth } from './firebase';
import HomeHeader from "./HomeHeader"

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    })
  }, [])

  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path='/login'>
        <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route>
          <HomeHeader user={user} selected />
        </Route>
      </Switch>
    </Router>  
    </div>
  )
}

export default App;

