import './Button.css';

let ButtonContent = {
  name : "adel",
  number : "1",
  content : "my button",
}

let ButtonFunc = function () {
  alert("ButtonFunc");
}

function Button () {
    return(
        <button className={"ButtonStyle"} onClick={ButtonFunc} > {ButtonContent.content} </button>
    );
}

export default Button ;