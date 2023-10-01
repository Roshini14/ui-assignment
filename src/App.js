import "./App.css";
import React from "react";
import Main from "./components/Main";
function App() {
  const application_status = "Opportunity  Browsing";
  function handleChange(value) {
    application_status = value;
  }
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
