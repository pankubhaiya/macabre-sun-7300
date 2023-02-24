require("dotenv").config()
const bcrypt = require("bcrypt")
const { usermodel } = require("../model/model")
const jwt = require("jsonwebtoken")

const validator = async(req,res,next)=>{
    try{
        let user =await usermodel.findOne({email:req.body.email})

        if(user != null) res.send({err:`user is already register ..`})
        else{
        
        if(await bcrypt.compare(req.body.password,user.password)){
            next()
        }else{
            res.status(403).send({err:`Password is not correct ..`})
        }
    }
    }catch(err){
        res.send({err:`${err.message}`})
    }
}

const tokenverify = async(req,res,next)=>{
    let token = req.headers.authorization
    try{
        jwt.verify(token,process.env.secretKEY,(err,decode)=>{
            if(decode){
           
                req.body.auther=decode.userid
                next()
            }else{
                res.send({err:`pleace fill the jwt  ...`})
            }
        })
    }catch(err){
        res.send({err:`${err.message}`})
    }
}

module.exports={validator,tokenverify}