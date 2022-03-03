let mongoose=require('mongoose')
let newbook1model=new mongoose.Schema({

    
	name:String,
		author:{type:mongoose.Schema.Types.ObjectId,
        ref:"newAuthor",
    },
    publisher:{type:mongoose.Schema.Types.ObjectId,
    ref:"newPublisher"},
	price:Number,
		ratings:Number,
        isHardCover:{
            type:Boolean,
            default:false
        },





    
},{timestamps:true})
module.exports=mongoose.model("newBook",newbook1model)