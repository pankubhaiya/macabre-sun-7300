
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const hotalrouter = express.Router()
const {hotalmodel} = require("../model/model")


hotalrouter.use(express.json())

hotalrouter.post("/add",async(req,res)=>{
    try{
        const newdata = new hotalmodel(req.body)
        await newdata.save()
        res.send("add succesfully")
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})


hotalrouter.get("/alldata",async(req,res)=>{
    try{
        const newdata = await hotalmodel.find()
          res.send(newdata)
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

hotalrouter.patch("/update/:id",async(req,res)=>{
    try{

       await hotalmodel.findByIdAndUpdate({_id:req.params.id},req.body)
          res.send({"mes":"update done"})
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

hotalrouter.delete("/delete/:id",async(req,res)=>{
    try{

      await hotalmodel.findByIdAndDelete({_id:req.params.id})
          res.send({"mes":"delete done"})
    }catch(err){
        res.send({"mes":"some err","err":err.message})
    }
    
})

module.exports={hotalrouter}
