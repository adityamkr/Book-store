import React from "react";
import "./styler.css";
import axios from "axios";


const a=function() { 
    console.log("in func");
    let x=document.getElementById("email").value;
     return x;
};


function Entry()
{
//  const history= new useNavigate()
//   history("/entry")
  
   

function getlogin()
{    
    
    let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
   console.log("hello from aditya");
   console.log(email);
   console.log(password);

   
     let detail={
         email:email,
         password:password
         }
     axios.post("http://localhost:9002/admin",(detail)).then(res=>console.log(res));

}
// const history= new useNavigate();








    return(
        
        <div className="register-form-container" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:100}}>

        <form action="">
            <h3>ADMIN</h3>
    
            <span>Email</span>
            <input type="email" name="" className="box" placeholder="enter your email" id="email"/>
        
            
            <span>password</span>
            <input type="password" name="" className="box" placeholder="enter your password" id="password"/>
            
            <input type="button" value="Login" onClick={getlogin} className="btn"/>

        </form>
        </div>
      )
 
}

export default Entry;
export {a};