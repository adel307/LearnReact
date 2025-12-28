import './SideBar.css';
import Button from './Button.js';

function SideBar () {
  let ButtonsList = [];
  let ButtonsNumber = 5;

  for (ButtonsNumber ; ButtonsNumber ; ButtonsNumber--){
    Button.key = ButtonsNumber
    ButtonsList.push(
      <Button/>
    );
  }
  
  return (
    <div className={"SideBarStyle"}>
      {
        ButtonsList
      }
    </div>
  );
}

export default SideBar ;