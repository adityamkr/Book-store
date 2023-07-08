import React from "react"
import "./styler.css";
import { useNavigate} from "react-router-dom"
import axios from "axios";
var x="";

axios.get("http://localhost:9002").then(res=>{
    console.log(res.data);
     x=res.image;
    console.log("matkar");
     })
     
console.log("packkkkkkkkk");
function Login()
{  

    // const navigate =new useNavigate();
    // const[state,changestate]=React.useState("0");

    
    function getlogin()
    {    
        
        let email=document.getElementById("email").value;
       let password=document.getElementById("password").value;
       console.log("hello from aditya");

      
      
         let detail={
             email:email,
             password:password
             }
         axios.post("http://localhost:9002/login",(detail)).then(res=>
         {
            console.log("souuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu");
            console.log(res);
            console.log(typeof(res.data));
            if(res.data=="op")
            {
             
                 history("/home")
            }
         });

    }
    const history= new useNavigate();
    console.log("it is here");

   
   return(

    <div className="register-form-container" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:100}}>

    <form action="">
        <h3>Login</h3>

        <span>Email</span>
        <input type="email" name="" className="box" placeholder="enter your email" id="email"/>
    
        
        <span>password</span>
        <input type="password" name="" className="box" placeholder="enter your password" id="password"/>
        
    
        <p>Dont have an account ? <a href="/register" onClick={history("/register")}>Register</a></p>
        <input type="button" value="Login" className="btn" onClick={getlogin}/>
       
        
    </form>
    
   </div>
   );
}
export default Login;