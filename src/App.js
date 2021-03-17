import React from "react"
import "./App.css"
import Main from "./Components/Main"

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

      <Main />
    </div>
  );
}

export default App;

// Google API Key : AIzaSyCnpg39_zOHWO0uvnnE842cs4RYy7da04c
