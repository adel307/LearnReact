import logo from './logo.svg';
import './App.css';
import MyButton from './AppCompotants/MyButton.js'
import Header from './AppCompotants/header.js'

function App() {
  return (
    <>
      <Header/>
      <div className="App">
        
        <header className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <p className={"Active MyButtonClass"}>
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
          <MyButton/>
        </header>
      </div>
    </>
  );
}

export default App;
