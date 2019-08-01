import React from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Welcome to an awesome weather app!</h1>
        <br />
      </div>
      <Weather />
    </React.Fragment>
  );
}

export default App;
