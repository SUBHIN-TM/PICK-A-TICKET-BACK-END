import { mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let connect=()=>{
  mongoose.connect(process.env.MONGOLINK, {
    socketTimeoutMS: 0, // Keep the connection open indefinitely
    connectTimeoutMS: 0 // Use 0 to disable, or specify a timeout
  })

  .then(()=>{
    console.log("MongoDb is connected");
  })
  .catch((err)=>{
    console.log("Mongo connection Error",err);
   })
}

export default connect;