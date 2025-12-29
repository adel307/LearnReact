import './SideBar.css';
import Button from './Button.js';

function SideBar () {
  let ButtonsList = [];
  let ButtonsNumber = 11;

  for (ButtonsNumber ; ButtonsNumber ; ButtonsNumber--){
    Button.key = ButtonsNumber
    ButtonsList.push(
      <Button/>
    );
  }
  
  return (
    <div>
      <p className={"PostsContainerTitleStyle"}>Buttons</p>
      <div className={"SideBarStyle"}>
      {
        ButtonsList
      }
    </div>
    </div>
  );
}

export default SideBar ;