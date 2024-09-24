import { useState } from "react";


const AddFoodItem = () => {
    const[name,setName]=useState();
    const[price,setPrice]=useState();
    const[path,setPath]=useState();
    const[description,setDescription]=useState();


    const handleAddFoodItem = async () => {
      console.log(name, price, path, description);
      let restro_id;
      const restaurantData = JSON.parse(localStorage.getItem('restaurantUser'));
      if (restaurantData) { // Corrected from restarantData to restaurantData
          restro_id = restaurantData._id;
      }
      let response = await fetch('http://localhost:3000/api/restaurants/foods', {
          method: 'POST',
         
          body: JSON.stringify({ name, price, img_path: path, description, restro_id })
      });
      response = await response.json();
      if (response.success) {
          alert("Food item Added");
      }
  };
  
    return (
       <>
       <h1>Add New Food Item</h1>
        <div className="container">
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Food Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Food Price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
          />
          
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Image Path"
            value={path}
            onChange={(e)=>setPath(e.target.value)}
          />
          
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
          
        </div>
        <div><button className="button" onClick={handleAddFoodItem}>Add</button></div>
            </div>
       </>
    );
};

export default AddFoodItem;