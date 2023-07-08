import React from "react";
import "./authenticate.css"
import  Entry from "./Entry"
import { useNavigate} from "react-router-dom";
function Authenticate()
{ 
   const history =new useNavigate();
    function addbook()
    { 
        
      history("/entry");
     console.log("heyyy");
    }
    return(
        <>
         <h1>hello</h1>
        <button onClick={addbook}>Owner</button>
        <button>User</button>
        </>
       
    )
}
export default Authenticate;