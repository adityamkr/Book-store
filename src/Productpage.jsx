import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cartpage from "./Cartpage";
 import "./productpage.css"


function Productpage(props)
{
  const history =new useNavigate()
  let refer="";
    let a="";

   let b=window.location.pathname;
   console.log(b);
   for(let i=b.length-1;i>=0;i--)
   {
      if(b.charAt(i)!="/")
      {
        a=b.charAt(i)+a;
      }
      else
       break;
   }
  console.log("this is a here",a)
   
   console.log( typeof(a));
   
   const[posts, setposts] = useState([])

    useEffect(()=>
    {
        axios.get("http://localhost:9002/product")
        .then(res=>
            {  
                console.log("this is  productpage res");
                console.log(res);
                setposts(res.data);
            })
            .catch(err=>
                {
                    console.log(err);
                })
    }
    
   ,[])
       
     posts.map((data)=>
     {
        if(data.isbn+""===a)
         refer=data;
        
     });

     function addtocart(x)
     {
        console.log("hey yo");
    
        axios.post("http://localhost:9002/cart",(x)).then(res=>
    {
        console.log(res);
     if(res.data==="present")
     {
       alert("item is present in cart");
     }
     else{
        console.log("item is not present in cart");
        alert("Item added to cart")
     }
    });

     }

     function Buy(item)
     {
      console.log("book to buy")
      console.log(item);
      history(`/payment/${item.isbn}`)
     }

    return(
        <div>
    <div className="bookimages">
        <img src={refer.bookimage}
            className="edimg" alt=""/>
    </div>
    <div className="bookish">

        <h1 style={{textAlign:"center",marginBottom:18,fontSize:40}}>{refer.bookname}</h1>
        <span className="by">By</span>
        <span className="writer">{refer.bookauthor}</span>
        <span className="bar">&#124;</span>
        <span className="star">5 &#9733;</span>
        <div className="container">
            <p className="orignal">Orignal</p>
            <p className="xyz">{refer.bookname}</p>
            <div></div>
            <p className="format">Format</p>
            <p className="bookformat">170x 215mm</p>
            <div></div>
            <p className="noofpages">No of Pages</p>
            <p className="pageno">324 pages</p>
            <div></div>
            <p className="yearofissue">Year of issue</p>
            <p className="year">2003</p>
            <div></div>
            <p className="yearofissue">Circulation</p>
            <p className="issueyear">12000</p>
        </div>
        <hr/>
        <span className="available">Available</span>
      
        <p className="costitem">{refer.price}</p>
        {/* <button className="addtocart" onClick={()=>addtocart(refer)}>Add to cart</button> */}
        <button className="addtocart" onClick={()=>Buy(refer)}>Buy</button>
        
    </div>
        </div>
        
    )
}
export default Productpage;