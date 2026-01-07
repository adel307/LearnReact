import './Button.css';
import { useState } from "react";

function Button (){
    console.log("rendar")
    // console.log(useState(name))
    let [name,SetName] = useState("adel");
    
    // console.log(SetNameValue)

    function ButtonFunc (){
        if (name === "adel"){
            SetName("Adel101");
        }
        else{
            SetName("adel");
        }
        
    }
    return (<>
        <button onClick = {ButtonFunc}> click here </button>
        <p>{name}</p>
    </>)
}

export default Button ;