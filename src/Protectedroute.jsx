
import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import axios from "axios";
import a from "./Entry";

const useauth=()=>
{   
    
    
     let b=a();
     console.log("this is msg",b);
    const detail={
        email:"",
        password:""
    }
    axios.post("http://localhost:9002/admin",(detail)).then(res=>
    {
     if(res.data==="success")
     {
        return true;
     }
     else
       return false;
    });
}
function Protectedroute()
{ 
 const a=useauth();
 if(a===false)
   return <Outlet/>
 else
   console.log("succcedded");
  return <Categories/>
}

export default Protectedroute