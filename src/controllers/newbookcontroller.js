const newauthormodel1 = require("../models/newauthormodel1")
let newbook1model=require("../models/newbook1model")
let publishermodel=require("../models/publishermodel")

let CreateBook=async function(req,res){
    let data = req.body
    let savedata=await newbook1model.create(data)
    res.send({data:savedata})
}

let updateBook=async function(req,res){

    let updatekey=await publishermodel.find({name:{$in:["Harper Collins","Penguin"]}}).select({_id:1})
    let array=[]
    array=updatekey.map(x=>x._id)
    
    let updatedata=await newbook1model.updateMany(
        {publisher:{$in:array}},
        {$set:{isHardCover:true}},
        {new:true})
        let authorid=await newauthormodel1.find({ratings:{$gt:3.5}}).select({_id:1})
        let arr=[]
        arr=authorid.map(x=>x._id)
        let wpdatedbook=await newbook1model.updateMany(
            {author:{$in:arr}},
            {$inc:{price:+10}},
            {new:true}
        )
        let specificBook=await newbook1model.find()
        res.send(specificBook)}






    
        

          
        
module.exports.CreateBook=CreateBook
module.exports.updateBook=updateBook