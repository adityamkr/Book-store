
import React, { useState } from "react";
import "./styles.css";
import {useNavigate,Link} from "react-router-dom";
import Productpage from "./Productpage";
import obj from "./obj";
import Aditya from "./Aditya";

let no1=0;
let no2=0;
let btn="";

 
function Card(props)
{ 
  let count= Math.floor(Math.random() * 10);

  // const [product]=useState(props.productData)
    let bkname="";
    let athname="";
    let offer="";
    let img="";
    let cost="";
   const history=new useNavigate();


   function cart()
 {

 }



    console.log("hello");
    no1=no1-1;
    btn="btn"+no1;
    bkname="bkname"+no1;
    athname="athname"+no1;
    offer="oft"+no1;
    img="img"+no1;
    cost="cost"+no1;

    console.log(btn)
  
    function xyz(event)
    {
      console.log("func is working00");
      console.log(props);


       props.getdata(props.isbn)
      // history(`/product/${props.isbn}`)


      
    let s="";
    let a=event.target.id;
    for(let i=a.length-1;i>=0;i--)
    {
        if(a[i]==="-")
         break;
         else
         s=a[i]+s;
          
    }
    console.log(s);
    let bkname="bkname-"+s;
    let athname="athname-"+s;
    let cost="cost-"+s;
    let img="img-"+s;
    let offer="oft-"+s;
  console.log("hello");
  <div className="parentdiv">

    </div>
    }
     console.log(props)

    return(

        <div className="innerdiv">
            <div className="offer" id={offer}>{props.offer}</div>
            <img src={props.bookimage} id={img} className="image1" alt=""/>
            <span className="bookname" id={bkname} >{props.bookname}</span>
            <span className="authorname" id={athname}><strong style={{color:"black"}}>By: </strong>{props.authorname}</span>
            <span className="actualprice" id={cost}>{props.price}<del style={{marginLeft:74,font:18}}>{props.discount}</del>
            </span>
           
            <button className="quickview" id={btn} onClick={xyz}>View</button>

      </div>
        
    )
}
export default Card;