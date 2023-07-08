import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Pay from "./Pay";

function X()
{
  return(
     <Router>
    <Routes>
    <Route exact path="/" element={<Pay/>}></Route>
    <Route exact path="/login" element={< Login/>}></Route>
    </Routes>
    </Router>
  )
}
export default X;
