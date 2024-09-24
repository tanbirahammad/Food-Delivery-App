import { connectionStr } from "@/app/liv/db";
import { foodsSchema } from "@/app/liv/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    const payload=await request.json();
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    const food=new foodsSchema(payload);
    const result=await food.save();
    return NextResponse.json({result})

}