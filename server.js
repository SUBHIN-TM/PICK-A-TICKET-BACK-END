import express from "express"
import cors from "cors"
import user from "./Routes/User.js"
import admin from "./Routes/Admin.js"
import connect from "./Config/MongoConnection.js"


const app=express()
const port=3000
connect()

app.use(express.json())
app.use(cors())

app.use('/',user)
app.use('/Admin',admin)



app.listen(port,()=>{
    console.log("Server is running on 3000");
})

