let assignbookmodel =require("../models/assignbookmodel")
let createbook=async function(req,res){
    let data =req.body
    let savedata=await assignbookmodel.create(data)
    res.send({"data":savedata})
}
let Booklist = async function(req,res){
    
    let savedata = await assignbookmodel.find().select({bookName:1,authorName:1, _id:0})
    res.send({"data":savedata})
}
let getbooksinyear=async function(req,res){
    let year1=req.body.year1
    let savedata = await assignbookmodel.find({year:{$eq:year1}})
    res.send({"msg":savedata})
}

let getparticularbooks = async function(req,res){
    let input= req.body.input
    let fetchbooks=await assignbookmodel.find({booknodel1:{$eq:input}})
    res.send({"msg":fetchbooks})
}
let getxinrbooks =async function(req,res){
    let data = await assignbookmodel.find({" prices[indianPrice]":{$in:[100,200,500]}})
    res.send(data)
}


let  getrandombooks= async function(req,res){
    let data= await assignbookmodel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send(data)
}



module.exports.getrandombooks=getrandombooks
module.exports.getxinrbooks=getxinrbooks
module.exports.createbook=createbook
module.exports.Booklist=Booklist
module.exports.getbooksinyear=getbooksinyear
module.exports.getparticularbooks=getparticularbooks