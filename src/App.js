import './App.css';
import SideBar from './AppCompotants/SideBar.js'
import Header from './AppCompotants/header.js'
import Posts from './AppCompotants/Posts.js'

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
