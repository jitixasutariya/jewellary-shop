// App.js
import React from "react";
import HomePage from "./Pages/Home/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Rendering the HomePage component */}
        <HomePage />
      </header>
    </div>
  );
}

export default App;
