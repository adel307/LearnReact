import './Button.css';

let ButtonFunc = function () {
  alert("ButtonFunc");
}

function Button ({ButtonContent}) {
  return(
    <button className={"ButtonStyle"} onClick={ButtonFunc} > {ButtonContent} </button>
  );
}

export default Button ;