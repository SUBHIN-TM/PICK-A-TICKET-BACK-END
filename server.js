import express from "express"
import cors from "cors"
import user from "./routers/user.js"
import admin from "./routers/admin.js"
import connect from "./config/mongoConnection.js"


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

