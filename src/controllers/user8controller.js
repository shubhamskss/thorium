let user8model=require("../models/user8model")
let jwt=require('jsonwebtoken')
let createuser=async function(req,res){
    let data=req.body
    let savedata=await user8model.create(data)
    res.send(savedata)
}
let loginuser=async function(req,res){
    let username=req.body.emailId
    let password=req.body.password
    let savelogin=await user8model.findOne({emailId:username,password:password})
    if(!savelogin){return res.send({msg:"username or paasword is not correct"})}
let token=await jwt.sign({userId:savelogin._id.toString()},'shubham kumar')
res.setHeader("x-auth-token", token)
res.send({status:true,data:token})


}
let getuser=async function(req,res){
//     let token=req.headers["x-auth-token"]
//     if(!token){return res.send({status:false,msg:"token required"})}

//     let decodetoken=jwt.verify(token,'shubham kumar')
    // if(!decodetoken){res.send("invalid token")}
    let userId=req.params.userId
    let userDetails=await user8model.findById(userId)
    res.send({satus:true,data:userDetails})

}
let updateuser=async function(req,res){
    // let token=req.headers["x-auth-token"]
    // if(!token){return res.send({status:false,msg:"token required"})}
    let userId=req.params.userId
    let userdata=req.body
    let updateuser=await user8model.findOneAndUpdate({_id:userId},userdata)//we dont take userdata in curlybracket since data come from body in json form
res.send({status:updateuser,data:updateuser})
}
const deleteUser = async function(req,res){
    // let token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" });
    let userId = req.params.userId;
    
    let userDelete = await user8model.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true});
    res.send({status:true, data:userDelete})
  };

module.exports.createuser=createuser
module.exports.loginuser=loginuser
module.exports.getuser=getuser
module.exports.updateuser=updateuser
module.exports.deleteUser=deleteUser