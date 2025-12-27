let content = {
  name : "adel",
  number : "1",
}

let SayHallo = function () {
  alert("hallo")
}

let MyButtonStyle = {
  backgroundColor : "red",
  fontSize : "20px",
}

function MyButton () {
  return (
    <>
      <button style={MyButtonStyle} onClick={SayHallo} > {content.number} button</button>
    </>
  );
}

export default MyButton ;