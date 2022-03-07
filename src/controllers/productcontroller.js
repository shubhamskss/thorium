let productmodel=require("../models/productmodel")
let saveproduct=async function(req,res){
    let data=req.body
    let savedata=await productmodel.create(data)
    res.send({savedata})
}
module.exports.saveproduct=saveproduct