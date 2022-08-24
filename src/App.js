import React from "react";
import "./App.css"

function App(props) {
  return (
    <React.Fragment>
      <div>
        <h1>{props.name}</h1>
      </div>
      <p>
        I am an Incoming Student @NUS
      </p>
    </React.Fragment>
  );
}

export default App;
