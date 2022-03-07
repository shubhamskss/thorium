let usermodel1=require("../models/userModel1")
let saveuser=async function(req,res){
    data=req.body
    
    
    let savedata= await usermodel1.create(data)
    res.send(savedata)
}
module.exports.saveuser=saveuser