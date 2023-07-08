
import React from "react";
import { render } from "react-dom";
import { Col, Divider, Row, Table } from 'antd';
import 'antd/dist/antd.css';
import axios from "axios";
import obj from "./obj";
import {useState,useEffect} from "react";

 function Invoice()
 {   

  
   let refer="";
   let arr=[];
  const[post,setposts] = useState([])

  useEffect(()=>
  {
      axios.get("http://localhost:9002/invoice")
      .then(res=>
          {  
              setposts(res.data);
              console.log(res.data);
              
          })
          .catch(err=>
              {
                  console.log(err);
              })
  }
  
 ,[])

 post.map((data)=>
 {
     refer=data;
    console.log(refer.name);
 });


    
  // axios.get("http://localhost:9002/invoice")
  // .then(res=>
  //     {  
  //       let obj=res.data;
        
  //       console.log("wwwwwwwwwwwwwwwwwwwwww");
  //       console.log(res);
  //     })
  //     .catch(err=>
  //         {
  //             console.log(err);
  //         })




     return (
    <div style={{ padding: 20 }}>
      <Row>
        <Col>
       
          <p style={{display:"block",marginLeft:390,fontSize:22,fontWeight:600}}>------------------ Invoice ------------------</p>
        </Col>
      </Row>



      <Row gutter={24} style={{ marginTop: 32 }}>
        <Col span={8}>
          <h3>Priya Book Store</h3>
          <div>Bannerghatt Road,</div><br />
        <div>Navi Mumbai</div>
        </Col>
        <Col span={8} offset={8}>
          <table>
            <tr>
              <th>Invoice # :</th>
              <td>1</td>
            </tr>
            <tr>
              <th>Invoice Date :</th>
              <td>31-10-2022</td>
            </tr>
          </table>
        </Col>
      </Row>

      <Row style={{ marginTop: 48 }}>

        <div>Bill To: <strong>{refer.name} </strong></div><br/>
       <div> <div>Bannerghatt Road,</div><br />
        <div>Navi Mumbai</div></div>
      </Row>


      <Row style={{ marginTop: 48 }}>
        <Table dataSource={[{
            id: 1,
            name:refer.bookname,
            description: 'Fiction',
            price:refer.price,
            quantity: 1
        }]}
        pagination={false}
        >
          <Table.Column title="Items" dataIndex='name' />
          <Table.Column title="Description" dataIndex='description' />
          <Table.Column title="Quantity" dataIndex='quantity' />
          <Table.Column title="Price" dataIndex='price' />
        </Table>
      </Row>

    </div>
     );
 }
  
 

export default Invoice;
