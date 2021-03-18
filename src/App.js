import React from "react"
import "./App.css"
import Main from "./Components/Main"
import Home from "./Components/Home"
import {Switch, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div>
      <p
        style={{
          fontSize: "50px",
          // fontFamily: "fantasy",
          textShadow: "2px 2px 1px green",
          textAlign: "center",
        }}
      >
        <b> Find a Brewski 🍺</b>
      </p>
        <Home />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
      <Main />
    </div>
  );
}

export default App;

// Google API Key : AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c
