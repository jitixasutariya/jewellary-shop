import "./App.css";
import HomePage from "./Pages/Home/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

// The App component is the main component of this application.
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
