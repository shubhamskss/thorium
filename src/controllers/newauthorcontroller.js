let newauthormodel=require("../models/newauthormodel1")
let newPublisher=require("../models/publishermodel")
let newbook=require("../models/newbook1model")
let createauthor=async function(req,res){
    let data =req.body
    let createdata=await newauthormodel.create(data)
    res.send({"data":createdata})

}
let createpublisher=async function(req,res){
    let data =req.body
    let createdata=await newPublisher.create(data)
    res.send({"data":createdata})
}
let createbook=async function(req,res){
    let data =req.body
    let authorid=data.author
    let publisherId=data.publisher
    if(!authorid){return res.send("this detail is required")}
    let author = await newbook.findById(authorid)
    if(!author){return res.send("the request is invalid,no author found")}
    if(!publisherId){return res.send("this detai is required")}
    let publisher=await newbook.findById(publisherId)
if(!publisher){return res.send("request is invalid no publisher found")}}
let allBooks=async function(req,res){
    let books=await newbook.find().populate("author publisher")
    res.send({data:books})
}


module.exports.createauthor=createauthor
module.exports.createpublisher=createpublisher
module.exports.createbook=createbook
module.exports.allBooks=allBooks