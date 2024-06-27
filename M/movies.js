import  mongoose  from "mongoose";

const moviesSchema=new mongoose.Schema({
 name:{type:String},
 type:{type:String},
 language:{type:String},
 duration:{type:String},
 ticket:{type:Number},
 image:{type:String},
 genre:{type:String},
 releaseRange:{from:{type:Date},
                to :{type:Date}
               }
},{versionKey:false,timestamps:true});

const MOVIES=mongoose.model('Movies',moviesSchema,'Movies');
export default MOVIES;


