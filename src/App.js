import React from 'react';
import {Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import './App.css';
import Main from './Components/Main'
// import Map from './Components/Map'

function App() {
  return (
    <div>
 
    {/*<Router> 
    <Switch>
    <Link to="/">
    <p>Find A Brewski</p>
    </Link>
    </Switch>
    </Router>*/}
  <Main />
  {/* <Map /> */}

    </div>
  );
}

export default App;


// Google API Key : AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c
