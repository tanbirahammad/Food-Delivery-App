
import { connectionStr } from "@/app/liv/db";
import { foodsSchema } from "@/app/liv/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){
    const id=content.params.id
    let success=false;
    await mongoose.connect(connectionStr,{useNewUrlParser:true})
    const result=await foodsSchema.find({restro_id:id});
    if(result){
        success=true
    }
    return NextResponse.json({result,success})

}