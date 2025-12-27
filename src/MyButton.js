import './MyButton.css';
let content = {
  name : "adel",
  number : "1",
  content : "my button",
}

let SayHallo = function () {
  alert("hallo")
}

function MyButton () {
  return (
    <>
      <button className='MyButtonClass'  onClick={SayHallo} > {content.content} </button>
    </>
  );
}

export default MyButton ;