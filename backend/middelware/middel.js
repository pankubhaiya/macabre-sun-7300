const {userModle} = require("../config/db")

const jwt = require("jsonwebtoken")

const jwtcheck=async(req,res,next)=>{
    let token = req.headers.Authorization
    jwt.verify(token,process.env.secretKey,(decode,err)=>{
        if(decode){
            req.body.user = decode.userid
            req.body.name = decode.name
            next()
        }else{
            res.send({err:`jwt needed...`})
        }
    })
}

module.exports = {jwtcheck}
