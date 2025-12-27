import logo from './logo.svg';
import './App.css';
import MyButton from './AppCompotants/MyButton.js'
import Header from './AppCompotants/header.js'
import Posts from './AppCompotants/Posts.js'

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Posts/>

      </div>
    </>
  );
}

export default App;
