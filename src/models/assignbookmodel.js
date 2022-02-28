const mongoose=require('mongoose')
let bookmodel1=new mongoose.Schema({

    bookName:{ 
        type:String,
    required:true },
    authorName: String, 

    
    
    prices: {
        indianPrice: String,
        europePrice: String,
    },

year:{type:Number,
    default:2021
},
tags:[String],
totalPages:Number,
stockAvailable:Boolean},
{timestamps:true})



module.exports=mongoose.model("book1",bookmodel1)