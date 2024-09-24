const { default: mongoose } = require("mongoose");

const foodsModel=new mongoose.Schema({
    name:String,
    price:Number,
    img_path:String,
    decription:String,
    restro_id:mongoose.Schema.Types.ObjectId

})
export const foodsSchema=mongoose.models.foods || mongoose.model("foods",foodsModel)