import React from "react";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Nav1 from "./Components/Nav1";
import Login from "./Components/Login";
import { Routes,Route } from "react-router-dom";
import Conatct from "./Components/Contact";
import Career from "./Components/Career";
import About from "./Components/About";
import Home from "./Components/Home";
import Product from "./Components/Product";

const App=()=>{

   return (
    <>
    <Nav1/>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/> 
       <Route path="/Con" element={<Conatct/>}/> 
       <Route path="/Care" element={<Career/>}/>
       <Route path="/about" element={<About/>}/> 
       <Route path="/product" element={<Product/>}/>
    </Routes>
    
      <Footer/>
    </>

   );
}
export default App;