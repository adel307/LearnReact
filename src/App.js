import logo from './logo.svg';
import Artical from './AppCombonents/Artical.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Artical/>
        <Artical/>
        <Artical/>
        <Artical/>
      </header>
    </div>
  );
}

export default App;
