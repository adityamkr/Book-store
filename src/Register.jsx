import React from "react";
import "./styler.css";
import {  useNavigate } from "react-router-dom";
import axios from "axios";



function Register()
{
    const history=new useNavigate();
   function registeruser()
   {
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value;
   let password=document.getElementById("password").value;
   let phone =document.getElementById("phone").value;
   let location =document.getElementById("location").value;


   let detail={
       name:name,
       email:email,
       password:password,
       phone:phone,
       location:location
       }
       console.log(detail);
   axios.post("http://localhost:9002/signup",(detail)).then(res=>
   {
    if(res.data==="success")
    {
      history("/login");
    }

   });

   }
  
    
    return(
         
        <>
       
        <div className="register-form-container" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:100}}>

    <form action="">
        <h3>Register</h3>
         <span></span>
        <span>username</span>
        <input type="name" name="" className="box" placeholder="enter your name" id="name"/>
        
        <span>Email Id</span>
        <input type="email" name="" className="box" placeholder="enter your email id" id="email"/>

        <span>Contact</span>
        <input type="tel" name="" className="box" placeholder="enter your phone number" id="phone"/>
        
        <span>password</span>
        <input type="password" name="" className="box" placeholder="enter your password" id="password"/>
        
        <span>confirm password</span>
        <input type="password" name="" className="box" placeholder="confirm your password" id=""/> 

        <span>Location</span>
        <input type="text" name="" className="box" placeholder="Enter Location" id="location"/>      

        <p>Already have an account ? <a href="/login" onClick={history("/login")}>Login</a></p>
        <input type="button" value="Register" onClick={registeruser}  className="btn"/>
        
    </form>
   </div>
   </>
    )
}
export default Register;