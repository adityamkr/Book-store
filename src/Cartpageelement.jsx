import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
 import "./newcart.css";
import { MdDelete } from 'react-icons/fa'
import {AiTwotoneDelete} from "react-icons/ai"
import Hello from "./Hello";
import { useState } from "react";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

function Cartpageelement(props)
{ 

  
  let count=0;
  console.log("component rerendered");
  let arr=[];
  const [state,changestate] = useState(0);
   console.log("stop here");
   console.log(props);
   
  // const[item, additem] = useState(count)
  const history =new useNavigate();
    
  axios.get("http://localhost:9002/data").then
  ((res)=>
  {
    console.log("hi from aditya")
    arr=res.data;
   
    arr.map((item)=>
    {
      if(item.isbn==props.isbn)
      {
        count=item.quantity;
        console.log(count);
        changestate(count);
      //   document.getElementById(props.isbn+"").innerHTML=count;
       }
    })
  })
  .catch((err)=>
  {
    console.log(err);
  })
  

 
  function updatetotal(value)
  {
    let arr=[],total=0;
    axios.get("http://localhost:9002/data")
    .then((res)=>
    {
      arr=res.data;
      console.log("it is arr",arr);
  
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
        
      });
      props.getdata(total);

    })
    .catch((err)=>
    {
      console.log(err);
    })
  }






  function addbutton()
  {
    
    
    axios.post("http://localhost:9002/plus",({isbn:props.isbn}))
    .then(res=>
        {  
           console.log("i got res");
           count=res.data;
            console.log("aditya matkar")
            //  document.getElementById(props.isbn+"").innerHTML=count;
            changestate(count);
             count+=1;
             op();
        }
           )
        .catch(err=>
            {
                console.log(err);
            })

   function op()
   {
  
    let obj=
    {
     isbn:props.isbn,
     quantity:count
    }
    axios.post("http://localhost:9002/inc",(obj))
   .then
   (res=> {console.log(res)
    if(res.statusText==="OK")
    {
      //  document.getElementById(res.data+"").innerHTML=count;
       changestate(count);

       updatetotal("+");
    //  props.getdata(230);
    }
     });
    //  <Hello value="2"/>

   }
   console.log("reached here");
     
   
  }











  function subbutton()
  {
    let res=document.getElementById(props.isbn).innerHTML;
    if(res>=2)
    {
      axios.post("http://localhost:9002/plus",({isbn:props.isbn}))
    .then(res=>
        {  
           console.log("i got res");
           count=res.data;
            console.log("aditya matkar")
              changestate(count);
            //  document.getElementById(props.isbn+"").innerHTML=count;
             count-=1;
             abc();
        }
           )
        .catch(err=>
            {
                console.log(err);
            })

   function abc()
   {
    console.log("yoy0");
    let obj=
    {
     isbn:props.isbn,
     quantity:count
    }
    axios.post("http://localhost:9002/inc",(obj))
   .then
   (res=> {console.log(res)
    if(res.statusText==="OK")
    {
      //  document.getElementById(res.data+"").innerHTML=count;
        changestate(count);
        updatetotal("-")

    }
     });
   }
   
    }



  }





    function delitem()
    {
     console.log("you are in del func");
     console.log(props.bookname)
     let detail=
     {
        bookname:props.bookname
     }
     axios.post("http://localhost:9002/delbook",(detail)).then(res=>
     {
      if(res.data==="success")
      {
        console.log("about to render")
        history("/cart");
        window.location.reload(true);
      }
     });
    }

 
    return(

      <div className="outerflex">

        <div className="prodimage">
            <img className="image" src={props.bookimage}/>
        </div>
         <h2 className="bnames">{props.bookname}</h2>
         <h3 className="authornames">{props.bookauthor}</h3>
         <div className="buttons">
            <button className="isbtn" onClick={addbutton}>+</button>
            <button className="label" id={props.isbn+""}>{state}</button>
            <button className="isbtn" onClick={subbutton}>-</button>
            <button className="delbtn" onClick={delitem}><i className="fa fa-trash"></i></button>
         </div>
         <p class="price">{props.price}</p>
         {/* <Hello value={state}/> */}
</div>

  
      //   <div class="innercart">
      //   <img src={props.bookimage} class="productimage" />
      //   <h2>{props.bookname}</h2>
      //   <h2 class="nameauthor">Aditya Matkar</h2>
      //   <p class="bookedprice">{props.price}</p>
        
      //   <button class="addbtn" onClick={addbutton}>+</button>
  
      //   <label class="text" id={props.isbn+""}>{props.quantity}</label>
      //   <button class="subbtn" onClick={subbutton}>-</button>
      
      //   <button class="delbtn" onClick={delitem}><AiTwotoneDelete/></button>
      //    </div>

       


      //   <TableContainer component={Paper}>
      //   <Table sx={{ minWidth: 650 }} aria-label="simple table">
      //     <TableHead>
      //       <TableRow>
      //         <TableCell>Book Image</TableCell>
      //         <TableCell align="right">Book Image</TableCell>
      //         <TableCell align="right">Book Name</TableCell>
      //         <TableCell align="right">Quantity</TableCell>
      //         <TableCell align="right">Price</TableCell>
      //         <TableCell align="right">Remove</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>
      //       {rows.map((row) => (
      //         <TableRow
      //           key={row.name}
      //           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      //         >
      //           <TableCell component="th" scope="row">
      //             {row.name}
      //           </TableCell>
      //           <TableCell align="right"><img src={props.bookimage}/></TableCell> 
      //           <TableCell align="right">{props.bookname}</TableCell>
      //           <TableCell align="right">{props.price}</TableCell>
      //           <TableCell align="right"><Button variant="secondary"  onClick={addbutton}>+</Button>{' '}
      //           <label id={props.isbn+""}>1</label>
      //           <Button variant="secondary" onClick={subbutton}>-</Button>{' '}</TableCell>
      //           <TableCell align="right"><Button variant="danger">Remove</Button>{' '}</TableCell>
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </Table>
      // </TableContainer>
    )
}
export default Cartpageelement;