
let mongoose = require("mongoose")

// let adminSchema = mongoose.Schema({

//       name:{type:String,required:true},
//       email:{type:String,required:true},
//       password:{type:String,required:true}
// },{
//     versionKey:false
// })

// let adminmodel = mongoose.model("admin",adminSchema)
 
// let userSchema = mongoose.Schema({

//     name:{type:String,required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true}
// },{
//   versionKey:false
// })
// let usermodel = mongoose.model("user",userSchema)

let hotalSchema = mongoose.Schema({
  
  img1:{type:String,required:true},
  img2:{type:String,required:true},
  img3:{type:String,required:true},
  img4:{type:String,required:true},
  img5:{type:String,required:true},
  rating: {type:Number,required:true},
  ratingText:{type:String,required:true},
  name:{type:String,required:true},
  locality: {type:String,required:true},
  location:{type:String,required:true},
  city:{type:String,required:true},
  price:{type:String,required:true}
    
},{
versionKey:false
})

let hotalmodel = mongoose.model("hotal",hotalSchema)

module.exports={hotalmodel}