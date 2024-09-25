
import { useState } from "react";

const AddFoodItem = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [path, setPath] = useState();
  const [description, setDescription] = useState();
  const[error,setError]=useState(false)

  const handleAddFoodItem = async () => {
    console.log(name, price, path, description);
    if(!name || !price || !path || !description){
      setError(true)
      return false;
    }
    let restro_id;
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    if (restaurantData) {
      // Corrected from restarantData to restaurantData
      restro_id = restaurantData._id;
    }
    let response = await fetch("http://localhost:3000/api/restaurants/foods", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        img_path: path,
        description,
        restro_id,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("Food item Added");
    }else{
      alert('Something Goes wrong')
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
            onChange={(e) => setName(e.target.value)}
          />
          {error && !name && <span className="input-error">Please add Name</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Food Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {error && !price && <span className="input-error">Please add Price</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Image Path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
          />
          {error && !path && <span className="input-error">Please add Image</span>}
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {error && !description && <span className="input-error">Write Some Words</span>}
        </div>
        <div>
          <button className="button" onClick={handleAddFoodItem}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default AddFoodItem;
