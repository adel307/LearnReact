import './App.css';
let content = {
  name : "adel",
  number : "1",
  content : "my button",
}

let SayHallo = function () {
  alert("hallo")
}

// let MyButtonStyle = {
//   backgroundColor : "red",
//   fontSize : "20px",
//   boxShadow : "10px 10px 10px black",
// }

function MyButton () {
  return (
    <>
      <button className='MyButtonClass'  onClick={SayHallo} > {content.content} </button>
    </>
  );
}

export default MyButton ;