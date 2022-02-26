const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    Bookname:String,
    authorname:String,
    category:{
        type:String,
        enum:["fiction","nonfiction"],
        required:true
    },
    year:Number,},
    {timestamps:true})
    module.exports=mongoose.model('book',bookSchema)





















