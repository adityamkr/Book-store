import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function Addbooks()
{   

   const history= new useNavigate();
  

   function addbook()
   { 

    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;


    let isbnno =document.getElementById("isbnno").value
    // console.log(isbnno);
    let bookname=document.getElementById("bookname").value;
    // console.log(bookname);
   let authorname=document.getElementById("authorname").value;
//    console.log(authorname);
   let bookimage =document.getElementById("bookimage").value;
//    console.log(bookimage)
   let bookprice =document.getElementById("bookprice").value;
//    console.log(bookprice)
   let bookoffer =document.getElementById("bookoffer").value;
//    console.log(bookoffer);
 
   let detail={
       isbn:isbnno,
       bookname:bookname,
       bookauthor:authorname,
       bookimage:bookimage,
       price:bookprice,
       offer:bookoffer,
       status:false
       }
 
 if(email=="admin" && password=="admin")
 {
    axios.post("http://localhost:9002/addbook",(detail)).then(res=>
    {
     if(res.data==="success")
     {
       history("/home");
     }
    });
   }

else{
    alert("You are not admin")
}
 }

   

    // key:Number,
    // bookname:String,
    // bookauthor:String, 
    // bookimage:String,
    // price:String,
    // discount:String,
    // offer:String,
    return(
        <div className="register-form-container" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:100}}>

    <form action="">
        <h3>Add Books</h3>
         
        <span>Enter Email</span>
        <input type="text" name="" className="box" placeholder="enter your email" id="email"/>

        <span>Enter Password</span>
        <input type="password" name="" className="box" placeholder="enter your email" id="password"/>


        <span>ISBN NO</span>
        <input type="text" name="" className="box" placeholder="enter your isbn no" id="isbnno"/>
        
        <span>Book Name</span>
        <input type="text" name="" className="box" placeholder="enter Book name" id="bookname"/>

        <span>Book Author</span>
        <input type="text" name="" className="box" placeholder="enter Book Author" id="authorname"/>
        
        <span>Book Image url</span>
        <input type="text" name="" className="box" placeholder="enter Book url" id="bookimage"/>
        
        <span>Book Price (₹)</span>
        <input type="text" name="" className="box" placeholder="enter Book Price" id="bookprice"/>    
         

        <span>Offer</span>
        <input type="text" name="" className="box" placeholder="Enter offer" id="bookoffer"/>    
       


        <input type="button" value="Add Book" onClick={addbook}  className="btn"/>
        
    </form>
   </div>
    )
}
export default Addbooks;