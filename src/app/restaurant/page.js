"use client"


import { useState } from "react";
import Login from "../_components/Login";
import Signup from "../_components/Signup";
import Header from "../_components/Header";
import './style.css'
import Footer from "../_components/Footer";

const Restaurant=()=>{
    const[login,setLogin]=useState(true);
    return(
        <>
       
       
       
       <div className="container">
        <Header/>
       {
        login?<Login/>:<Signup/>
       } 
        <button className="button-linking" onClick={()=>setLogin(!login)}>
            {
                login?"Create an Account ? Sign Up":"Already have an account ? Login"
            }
        </button>

       </div>
       <Footer/>
        </>
    )
}
export default Restaurant;