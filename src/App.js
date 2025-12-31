import './App.css';
import SideBar from './AppCombonents/SideBar.js'
import Header from './AppCombonents/header.js'
import Posts from './AppCombonents/Posts.js'

function App() {
  return (
    <>
      <div className={"App"}>
        <Header/>
        <div className={"Content"}>
          <Posts/>
          <SideBar/>
        </div>

      </div>
    </>
  );
}

export default App;
