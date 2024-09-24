import { connectionStr } from "@/app/liv/db";
import { restaurantsSchema } from "@/app/liv/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    
    const data=await restaurantsSchema.find()
    console.log(data);
    return NextResponse.json({result:data})
}

export async function POST(request){
    let payload=await request.json();
    let result;
    let success=false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    if(payload.login){
        //use it for login
        result= await restaurantsSchema.findOne({email:payload.email, password:payload.password})
        if(result){
            success=true;

        }

    }else{
        //use it for sign up
        let restaurant=new restaurantsSchema(payload)
        result=await restaurant.save();
        if(result){
            success=true;
        }
        
    }
   
   

    return NextResponse.json({result,success})
}