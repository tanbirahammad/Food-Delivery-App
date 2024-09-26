import React, { useEffect, useState } from 'react';

const FoodItemList = () => {
    const [foodItems,setFoodItems]=useState()
    useEffect(()=>{
        loadFoodItems();
    },[])

    const loadFoodItems=async()=>{
        let responce=await fetch('http://localhost:3000/api/restaurants/foods')
        responce= await responce.json();
        console.log(responce)
        if(responce.success){
            setFoodItems(responce.result)
        }else{
            alert('Error')
        }
    }
     
    return (
        <>
        <div >
            <h1>Food Item List</h1>
            <table >
                <thead>
                    <tr>
                        <td>S.N</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Operations</td>

                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>1</td>
                        <td>Pizza</td>
                        <td>300</td>
                        <td>Best seller Pizza in the town</td>
                        <td>Image</td>
                        <td><button>Delete</button><button>Edit</button></td>

                    </tr>
                </tbody>
            </table>
            </div>
        </>
    );
};

export default FoodItemList;