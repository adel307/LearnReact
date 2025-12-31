import './SideBar.css';
import Button from './Button.js';

function SideBar () {
  let ButtonsList = [];

  for (let ButtonsNumber = 3 ; ButtonsNumber ; ButtonsNumber--){

    let ButtonsContintList = [
        <>
            <p> 1 </p>
        </>,
        <>
            <p> 2 </p>
        </>,
        <>
            <p> 3 </p>
        </>,
    ]

    Button.key = ButtonsNumber;
    ButtonsList.push(
      <Button ButtonContent = {ButtonsContintList[3 - ButtonsNumber]}/>
    );
  }

  return (
    <div>
      <p className={"SideBarHeaderStyle"}>SideBar</p>
      <div className={"SideBarStyle"}>
        {
          ButtonsList
        }
      </div>
    </div>
  );
}

export default SideBar ;