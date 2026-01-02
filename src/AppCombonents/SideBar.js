import './SideBar.css';
import Button from './Button.js';
import myImage from '/home/adel101/my_work/react/React.js/react_project2/public/MyImage.png'
import myImage2 from '/home/adel101/my_work/react/React.js/react_project2/public/MyImage.png'

function SideBar () {
  let ButtonsList = [];

  for (let ButtonsNumber = 4 ; ButtonsNumber ; ButtonsNumber--){

    let ButtonsContintList = [
      <>
        <p> ⚡⚡⚡ جديد </p>
      </>,
      <>
        <p> الأكثر قرائة </p>
        <img src={myImage2} alt="وصف الصورة" style={{ width: '120px', high: '120px' }}/>
      </>,
      <>
        <div className={"SecondButtonStyle"}>
          <p> الأكثر قرائة </p>
          <p></p>
          <img src={myImage} alt="وصف الصورة" style={{ width: '120px', high: '240px' }}/>
        </div>
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