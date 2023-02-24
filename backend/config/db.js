const mongoose = require("mongoose")

mongoose.set('strictQuery', false)

require("dotenv").config()

const connecton = mongoose.connect(process.env.mongoURL)

module.exports={connecton}