import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          React Weather Search Engine
        </h1>
        <Weather />
        </div>
        <footer>
          <a href="https://github.com/pengallow/react-weather-search-engine">GitHub Repository</a>
        </footer>
    </div>
  );
}

export default App;
