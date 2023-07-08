import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
// import "./cart.css";
import "./newcart.css"
import Cartpageelement from "./Cartpageelement";
import Hello from "./Hello";

function Cartpage(props) {
   let z="";
   let best=0;
    const[cart, setcart] = useState([])
    const [style,changestyle] =useState(0);


    useEffect(()=>
    {
      let arr=[];
      let a="";
      console.log("hell aditya");
        axios.get("http://localhost:9002/cart")
        .then(res=>
            {  let total=0;
                console.log("this is res");
                 setcart(res.data);
                 console.log(cart);
                 arr=res.data;
                 
                 arr.map((item)=>
                 {
                   let k="";
                   for(let i=item.price.length-1;i>=0;i--)
                   {
                     if(item.price.charAt(i)!=' ')
                     {
                       k=item.price.charAt(i)+k;
                     }
                     else
                        break;
                   }
                   console.log("k here",k);
                   k=Number(k);
                   total=total+(item.quantity)*(k);
                   a=total;
                   
                  }

            )
            changestyle(a);
            
          })
            .catch(err=>
                {
                    console.log(err);
                })
    }
    
   ,[])

   
    
   function getdata(data)
     {
        console.log("i got data",data);
         changestyle(data);
       
        }

//    cart.map((data)=>
//    {
//       if(data.isbn==2)
//        {
//         z=data;
//        }
//    });
    
    
  
  



    // console.log("this is cart",cart[0]);
    // console.log("cart page here",props.data);
    return (
      <>
      <h1 class="shopcart">Shopping Cart</h1>
      <hr/>
          {
            
            cart.map((data)=>(
             <Cartpageelement bookname={data.bookname} price={data.price} bookimage={data.bookimage} quantity={data.quantity} isbn={data.isbn} bookauthor={data.bookauthor} getdata={getdata}/>
         ))
         
         }
       {
          <Hello value={style}></Hello>
         
       }
    
        
          
      </>
      
    )
}
export default Cartpage;