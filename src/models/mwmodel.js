let mongoose=require('mongoose')
let mwSchema=new mongoose.Schema({
name:String,
age:Number,
Location:String



   
},{timestamps:true})
module.exports=mongoose.model("data",mwSchema)