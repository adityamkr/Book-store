import React from "react";
import "./styles.css";
import Card from "./Card";
import obj from "./obj";
import axios from "axios";
import  {useState, useEffect} from "react";
import logo from "./book.png"
import Modal from "./Modal";




let arr=[];
function Categories()
{ 
      let count=0;
    const[posts, setposts] = useState([])
    const[popup,setpopup] =useState(0)

    useEffect(()=>
    {
        axios.get("http://localhost:9002/book")
        .then(res=>
            {  
                console.log("this is res");
                console.log(res);
                setposts(res.data);
                console.log(posts[0])
                  arr.push(res.data);
                 console.log("this is arr",arr)
            })
            .catch(err=>
                {
                    console.log(err);
                })
 
    }
    
   ,[])

   function getdata(item,vari)
   {
    
      console.log("random be",vari);
     console.log("this is popup",item);
    
     item=Number(item);
     axios.post("http://localhost:9002/updatestatus",({isbn:item})).then(res=>
     {
        if(res)
        {
         console.log("status updated");
        }
     });






     setpopup(item);
    //   setpopup(vari);

   }
   
    
    return(
        <div>


{/* Home Section Starts here  */}
    <section className="home">

        <div className="row">

            <div className="content">
                <h3>Welcome to Priya Books</h3>
                <p> We provide you place where you can easily buy books</p>
                <a href="#" className="btn">shop now</a>
            </div>

            <div className="swiper books-slider">
                
                <img src={logo} className="stand" alt=""/>
            </div>

        </div>

    </section>
{/*  */}

     
    <div className="parentdiv">
       {
         posts.map((data)=>(
        
        // <Card productData={data}/>
        <Card bookname={data.bookname} bookimage={data.bookimage} authorname={data.bookauthor} price={data.price}  isbn={data.isbn} offer={data.offer} getdata={getdata}/>
       ))
       }
       
       {
        
        <Modal isbn={popup}/>
       }
        
       </div>
       </div>

    
       
    )
}
export default Categories


