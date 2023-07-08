import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./Categories";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Productpage from "./Productpage";
import Authenticate from "./Authenticate";
import Entry from "./Entry";
import Protectedroute from "./Protectedroute";
import Navbar from "./Navbar";
import UncontrolledExample from "./UncontrolledExample";
import Addbooks from "./Addbooks";
import Cartpage from "./Cartpage";
import Pay from "./Pay";
import Invoice from "./Invoice"



function App() {
    return(
      <Router>
         <Navbar/>
         {/* <UncontrolledExample/> */}
          <Routes>
          <Route exact path="/" element={< Login />}></Route>
           <Route  exact path="/register"element={< Register />}></Route>
           <Route  exact path="/login"element={< Login />}></Route>
           <Route exact path="/home" element={<Categories/>}></Route>
           <Route exact path="/products" element={<Productpage/>}></Route>
           <Route exact path="/owner" element={<Authenticate/>}></Route>
           <Route element={<Protectedroute/>}>
           <Route exact path="/admin" element={<Entry/>}></Route>
           </Route>
           <Route exact path="/addbooks" element={<Addbooks/>}></Route>
            <Route exact path="/product/:isbn" element={<Productpage/> }/>
            <Route exact path="/payment/:isbn" element={<Pay/> }/>
            <Route exact path="/cart" element={<Cartpage/>}></Route>
            <Route exact path="/payment" element={<Pay/>}></Route>
            <Route exact path="/invoice" element={<Invoice/>}></Route>
            </Routes>
        </Router>  
    )
}

export default App;
