let mongoose = require('mongoose')
let publishermodel = new mongoose.Schema({
    name: String,
    headQuarter: String
    
},{timestamps:true})
module.exports=mongoose.model("newPublisher",publishermodel)