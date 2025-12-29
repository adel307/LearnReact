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
        <Artical name = {"ade"} age = {"10"} email = {"ade@gmail.com"} content = {"content of ade card"}/>
        <Artical name = {"ali"} age = {"20"} email = {"ali@gmail.com"} content = {"content of ali card"}/>
        <Artical name = {"ase"} age = {"30"} email = {"ase@gmail.com"} content = {"content of ase card"}/>
        <Artical name = {"git"} age = {"40"} email = {"git@gmail.com"} content = {"content of git card"}/>
      </header>
    </div>
  );
}

export default App;
