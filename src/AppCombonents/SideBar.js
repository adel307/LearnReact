import './SideBar.css';
import Button from './Button.js';

function SideBar () {
  let ButtonsList = [];

  for (let ButtonsNumber = 3 ; ButtonsNumber ; ButtonsNumber--){

    let ButtonsContintList = [
      <>
        <p> ⚡⚡⚡ جديد </p>
      </>,
      <>
        <p> الأكثر قرائة </p>
        <img src={process.env.PUBLIC_URL +"/favicon.ico"} alt="وصف الصورة" style={{ width: '120px', high: '120px' }}/>
      </>,
      <>
        <div className={process.env.PUBLIC_URL +"SecondButtonStyle"}>
          <p> مقالات مميزية </p>
          <p> ☆☆☆ </p>
          <img src={"/MyImage.png"} alt="وصف الصورة" style={{ width: '120px', high: '240px' }}/>
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