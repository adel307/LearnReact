import './SideBar.css';
let content = {
  name : "adel",
  number : "1",
  content : "my button",
}

let SayHallo = function () {
  alert("hallo")
}

function SideBar () {
  let buttons = [];

  for (let i =0 ; i<5 ; i++){
    buttons.push(
      <button onClick={SayHallo} > {content.content} </button>
    );
  }
  
  return (
    <div className={"SideBarStyle"}>
      {
        buttons
      }
    </div>
  );
}

export default SideBar ;