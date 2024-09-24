'use client'

import Header from "@/app/_components/Header";
import '../../restaurant/style.css';
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";

const Dashboard=()=>{
    const[addItem,setAddItem]=useState(false);

    return(
        <>
        <Header/>
        <button onClick={()=>setAddItem(true)}>Add Food</button>
        <button onClick={()=>setAddItem(false)}>Dashboard</button>
        {
            addItem?<AddFoodItem/>:<h1>welcome to Dashboard</h1>
        }
        
        
        </>
    )
}

export default Dashboard;