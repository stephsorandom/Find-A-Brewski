import React from 'react';
import {Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
 
    <Router> 
    <Switch>
    <Link to="/">
    <p>Find A Brewski</p>
    </Link>
    </Switch>
    </Router>

  
    </div>
  );
}

export default App;
