let  mongoose=require('mongoose')
let newauthormodel1=new mongoose.Schema({
authorName:String,
age:Number,
address:String,
ratings:Number


},{timestamps:true})
module.exports=mongoose.model("newAuthor",newauthormodel1)
