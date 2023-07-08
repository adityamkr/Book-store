import React from "react";
import { useNavigate } from "react-router-dom";

function Image(props)
{   

    console.log("props reached here")
  return(
    <div>
        <img src={props.image}></img>
    </div>
  )
}
export default Image;