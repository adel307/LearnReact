import './App.css';
import SideBar from './AppCombonents/SideBar.js'
import Header from './AppCombonents/header.js'
import Posts from './AppCombonents/Posts.js'

function DisplaySideBar () {
  let sidebar = false ;
  if(sidebar === true){
    return (
      <SideBar/>
    )
  }
  return(
    <div></div>
  )

}

function App() {
  return (
    <>
      <div className={"App"}>
        <Header/>
        <div className={"Content"}>
          <Posts/>
          <DisplaySideBar/>
          
        </div>

      </div>
    </>
  );
}

export default App;
