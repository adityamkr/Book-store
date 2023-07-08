
import axios from "axios";
import React from "react";
import { useState } from "react";

function Hello(props)
{
    
   console.log(props.value);
      
    console.log("welcome in");
   
    let x=0;
    const [state,setstate]= useState(x);

  let arr=[]
    axios.get("http://localhost:9002/data").then((res)=>
    {
      arr=res.data;
      console.log(arr);
    
    let result="";
       arr.map((item)=>
       {   
          result="";
          let price=item.price;
          for(let i=price.length;i>=0;i--)
          {
            if(price.charAt(i)!=' ')
            {
                result=price.charAt(i)+result;
            }
            else
            {
                break;
            }
          }
           result=Number(result);
           x=x+result;
           console.log("x",x)

       })
       console.log("this is our result",x);
       setstate(x);
       console.log(state);


    })
    .catch((err)=>
    {
        console.log(err);
    })
  
  if(props.value!=0)
   return(
    <h1>Total price={props.value}</h1>
   )
   else{
    
    return(
      <div>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png" alt="image" style={{marginLeft:412,marginTop:-32,width:573,height:366}}/>
      </div>
    )
     
    
      
   }

    
}
export default Hello;