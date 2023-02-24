
const express = require("express")
require("dotenv").config()
const {usermodel} = require("../model/model")

const userrouter = express.Router()


userrouter.post("/register",async(req,res)=>{
    
    try{
        let newuser = new usermodel(req.body)
        await newuser.save()
        res.send({mes:"registration successfull"})

    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
     
})

userrouter.post("/login",async(req,res)=>{
    
   const {email,password}=req.body

   try{
       
    const user = await usermodel.find(email,password)
    if(user.length>0){
        res.send("loging successfull")

    }else{
        res.send("wrong credicial")
    }
   }catch(err){
    res.send({"mes":"some err","err":err.message})
   }
     
})


module.exports ={userrouter}
