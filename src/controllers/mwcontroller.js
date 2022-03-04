let mwmodel=require("../models/mwmodel")
let firstmwHandler= async function(req,res){
    data=req.body
    let savedata=await mwmodel.create(data)
    res.send({savedata})
}
const checkdata=function(req,res){
    res.send("hi")
}
const gmwpractice=function(req,res){
    res.send(" practice going well")
}
module.exports.firstmwHandler=firstmwHandler
module.exports.checkdata=checkdata
module.exports.gmwpractice=gmwpractice