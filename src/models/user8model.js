let mongoose=require('mongoose')
let user8model=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:String,
    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:["male","female","other"]
    },
	isDeleted:{type:Boolean,
        default:false}, //default value is false 
    age:Number,
    posts:{type:[],
    default:[]},
},{timestamps:true})
module.exports=mongoose.model("user8",user8model)