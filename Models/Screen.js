import mongoose from "mongoose";

const screenSchema=new mongoose.Schema({
    screen:{type:String},
    movie:{type:String},
    totalSeat:{type:Number},
    times: [{ type: String }]

},{versionKey:false,timestamps:true})

const SCREEN=mongoose.model('Screens',screenSchema,'Screens')
export default SCREEN;