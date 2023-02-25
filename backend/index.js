const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const {connecton} = require("./config/db")
const {adminrouter} = require("./router/admin")
const {userrouter} = require("./router/user")
const {hotalrouter} = require("./router/hotal")

const {validator,tokenverify} = require("./middelware/middel")
const app = express()
app.use(express.json())



app.get("/",(req,res)=>{
      res.send("welcome to home page")
})











app.listen(process.env.port,async()=>{
    try{
        await connecton
        console.log("connected to db")

    }catch(err){
       console.log({"mes":err.message})
    }
    console.log(`server is awake  at  ${process.env.port}....`)
})
 