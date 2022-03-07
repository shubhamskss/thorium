let mongoose=require('mongoose')
let ordermodel= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    ref:"user12"},
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    amount: Number,
    isFreeAppUser:Boolean, 
    date:{
        type:Date,
        default:Date.now()
    },},{timestamps:true})
    module.exports=mongoose.model("order",ordermodel)










