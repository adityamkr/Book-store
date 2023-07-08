import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Invoice from "./Invoice";
import "./Pay.css"

function Pay()
{   
     
   let k={};
   
    const history =new useNavigate();
    let root= window.location.pathname;
    console.log("we got path",root);
     let a="";
    for(let i=root.length-1;i>=0;i--)
   {
      if(root.charAt(i)!="/")
      {
        a=root.charAt(i)+a;
      }
      else
       break;
    }
    a=Number(a);
    
    console.log(a);
      
  
 

       const[book, setbook] = useState([])


      useEffect(()=>
       {
        let p=10;
        if(a!="")
        {
         console.log("homyyyy")
         
          let detail=
          {
             isbn:a
          }
         axios.post("http://localhost:9002/payme",(detail)).then(res=>
         {
             console.log("sarika matkar",res.data);
              k=res.data[0];
              setbook(k);
              console.log("done")
              
         });
        }
        p=12;
       }
       
      ,[])
     
      console.log("array found",book.price);
      

























    // const [book, setBook] = useState({
	// 	name: "The Fault In Our Stars",
	// 	author: "John Green",
	// 	img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
	// 	price: 250,
	// });

    

	const initPayment = (data) => {
        console.log("here is data",data);

		const options = {
			key:"rzp_test_R63KLgAcBk5ort",
			amount:data.amount,
			currency: data.currency,
			name: book.bookname,
			description: "Test Transaction",
			image: book.bookimage,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:9002/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
                    if(data.message==="success")
                    {
                        alert("PAYMENT SUCCESSFULL !!")
                        setInterval(()=>
                        {
                          history("/invoice")
                        },2000)

                    console.log(data.message);
        
                    }
					
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
             console.log("aditya");
			const orderUrl = "http://localhost:9002/api/payment/orders";
             
              console.log("this is book price",book);
              let c=book.price;
              let m="";
              console.log(typeof(c));
             for(let i=c.length-1;i>=0;i--)
             {
                if(c.charAt(i)!=' ')
                {
                   m=c.charAt(i)+m;
                }
                else
                {
                    break;
                }
             }
             m=Number(m);
             console.log("this is m",m,typeof(m));
              console.log(book.price);
			const { data } = await axios.post(orderUrl, { amount:m});


        console.log("hello world")
            //logic
            let abc={
                isbn:book.isbn,
                bookname:book.bookname,
                price:book.price,
                quantity:1,
                }
           console.log(abc);

            axios.post("http://localhost:9002/invoice",(abc)).then(res=>
            {
                console.log("wolrd")
               if(res.data==="posted")
               {
                 console.log("i am in") ;
               }
            });
     console.log(" hello")




			console.log(data);
            console.log("madke pa")
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<div className="book_container">
				<img src={book.bookimage} alt="book_img" className="book_img" />
				<p className="book_name">{book.bookname}</p>
				<p className="book_author">By {book.bookauthor}</p>
				<p className="book_price">
					Price : <span>&#x20B9; {book.price}</span>
				</p>
				<button onClick={handlePayment} className="buy_btn">
					buy now
				</button>
			</div>
		</div>
	);
    }
export default Pay