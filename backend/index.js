require("dotenv").config()
const express = require("express")
const app = express()
const {connection} = require("./config/db")

const {jwtcheck} = require("./middelware/middel")
const cors = require("cors")
const {userRouter} = require("./router/user")
const {hotalrouter} = require("./router/hotal")


app.use(cors())
app.use(express.json())


app.use('/user',userRouter)
app.use("/hotal",hotalrouter)
app.use(jwtcheck)
app.get("/",(req,res)=>{res.send({msg:`Welcome to home route`})})


app.listen(process.env.PORT,async()=>{
    try{await connection
        console.log(`DB connected ...`)
    }catch(err){console.log(err)}
    console.log(`Server runing on port ${process.env.PORT}`)
})



