import axios from "axios";
import React, {useState } from "react";
import "./modal.css";
import obj from "./obj";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {
  
  
  const history= new useNavigate();
  const [modal, setModal] = useState(true);
  const [desc,setdesc] =useState({});
  const [digit,changedigit] = useState(1)
  
 
//  console.log("modal",modal);
     
    
      axios.post("http://localhost:9002/status",{isbn:props.isbn})
      .then(res=>
          {  
            // console.log("here is",res)
            if(res.data.status==true)
            {
             let obj=res.data;
              // console.log("this is obj",obj);
              setModal(true);
              setdesc(obj);
            }
            else
            {
              // console.log("boooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
              setModal(false);
            }
          })
          .catch(err=>
              {
                  console.log(err);
              })

  

    //  if(modal==false)
    //  {
    //   setModal(true);
    //  }
    



  let x=props.isbn;
  x=Number(x);
  // console.log(modal);
  
   if(x==0)
   {
    // console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
  
   }
   else
   {

   
    // if(modal==false)
    // {
    //   setModal(true);
    // }
    // console.log("modelllllllllllllllllllllllllllllllllllllllllllllllllllllllllll worked");

   

    const toggleModal = (item) => {
      // console.log("this is togglemodel");
     
      // setModal(!modal);
      // setModal(!modal)
      // console.log("this is set modal",modal);
      axios.post("http://localhost:9002/update",{isbn:props.isbn,status:false})
      .then(res=>
          {  
    
            //  console.log("i am in",res)
              setModal(false);
          
          })
          .catch(err=>
              {
                  console.log(err);
              })
      //  setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    
    function addbutton()
    {
      console.log(digit);
       let a=digit;
       a+=1;
       changedigit(a);
    }

    function subbutton()
    {
      let a= digit;
      if(a>=2)
      {
        a-=1;
      changedigit(a);
      }
    
    }

    function addtocart()
    {
      console.log("matky",desc);
      let obj=
      {
        isbn:desc.isbn,
        bookname:desc.bookname,
        bookimage:desc.bookimage,
        price:desc.price,
        quantity:digit,
        bookauthor:desc.bookauthor
      }
      
      axios.post("http://localhost:9002/cart",obj).
      then((res)=>
        {
          alert("Item added");
        })
        .catch((err)=>
        {
          console.log(err);
        })
      
    }

     return(
      <>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button> */}
    
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2></h2>
            <div className="descoffer">{desc.offer}</div>
             <div className="descimage">
              <img src={desc.bookimage} style={{width:116,height:166}}/>
             
             </div>
              <p className="descprice">{desc.price}</p>
               <h2 className="descbookname">{desc.bookname}</h2>
               <p className="descauthorname">By: {desc.bookauthor} | Released:02 Aug 2016</p>
               <p className="descdescription">
                 <b>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores rem, ipsum id voluptates possimus quam corporis recusandae nesciunt. Asperiores consequuntur placeat, quo ratione at accusamus dignissimos neque necessitatibus quas aspernatur!
                    </b> 
               </p>
              <div className="descbuttons">
                <button className="descaddbtn" onClick={addbutton}>+</button>
                <button className="desclabel">{digit}</button>
                {/* <label className="desclabel">1</label> */}
                <button className="descsubbtn" onClick={subbutton}>-</button>
              </div>
               <button className="desccart" onClick={addtocart}>Add to cart</button>
               <button className="descprodet" onClick={()=>history(`/product/${desc.isbn}`)}>View Product Details</button>
            <button className="close-modal" onClick={()=>toggleModal(false)}>
              X
            </button>
          </div>
        </div>
      )}
    </>
     )
   } 
 
 
}