
const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const adminrouter = express.Router()
const {adminmodel} = require("../model/model")


adminrouter.use(express.json())

adminrouter.post("/register",async(req,res)=>{

      const {name, email, password} =req.body


      try{
          bcrypt.hash(password, 4, async(err, hash) =>{
              // Store hash in your password DB.
              if(err){
                  res.send({"mes":"some err"})
                }else{
                    const user = new adminmodel({name, email, password:hash})
                    
                    await user.save()
                    res.send("registration done")
                }
            });
            
        }catch(err){
            res.send({"mes":"some err","err":err.message})
        }
    
})



adminrouter.post("/login",async(req,res)=>{
        try{
            let user = await adminmodel.findOne({email:req.body.email})
            let token = jwt.sign({userid:user._id},process.env.secretKEY,{expiresIn:"3h"})
            res.send({name:user.name,token:token})
        }catch(err){
            res.send({"mes":"some err","err":err.message})
        }
})




module.exports ={adminrouter}

