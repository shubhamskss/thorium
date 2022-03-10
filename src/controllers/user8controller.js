let user8model=require("../models/user8model")
let jwt=require('jsonwebtoken')
let createuser=async function(req,res){
try{
    let data=req.body
    if(Object.keys(data).length==0){res.status(400).send({msg:"Bad request"})}
    let savedata=await user8model.create(data)
    res.status(201).send(savedata) }
    catch(err){res.status(500).send({msg:"error",err:err.message})}
}
let loginuser=async function(req,res){
   
   try{ let username=req.body.emailId
if(!username){res.status(400).send({msg:"Bad request"})}
    let password=req.body.password
    if(!password){res.status(400).send({msg:"Bad request"})}
    let savelogin=await user8model.findOne({emailId:username,password:password})
    if(!savelogin){return res.status(400).send({msg:"username or paasword is not correct"})}
let token=await jwt.sign({userId:savelogin._id.toString()},'shubham kumar')
res.setHeader("x-auth-token", token)
res.status(201).send({status:true,data:token})}
catch(err){res.status(500).send({msg:"error",err:err.message})}

}
let getuser=async function(req,res){
//     let token=req.headers["x-auth-token"]
//    if(!token){return res.send({status:false,msg:"token required"})}

//     let decodetoken=jwt.verify(token,'shubham kumar')
//  if(!decodetoken){res.send("invalid token")}
//     let usertobeModified=req.params.userId
//     let userloggedin=decodetoken.userId
    // if(usertobeModified!=userloggedin){return res.send({status:false,msg:"not authorised"})}
  try{  let userId=req.params.userId
    if(!userId){res.status(400).send({msg:"Bad request"})}
    let userDetails=await user8model.findById(userId)
    if(!userDetails){res.status(400).send({msg:"Bad request"})}
    res.status(201).send({satus:true,data:userDetails})}
    catch(err){res.status(500).send({msg:"error",err:err.message})}

}
let updateuser=async function(req,res){
//      let token=req.headers["x-auth-token"]
//      if(!token){return res.send({status:false,msg:"token required"})}
    
//     let decodetoken=jwt.verify(token,'shubham kumar')
//  if(!decodetoken){res.send("invalid token")}
 try{
    const userId=req.params.userId
    console.log(userId)
    if(!userId){res.status(400).send({msg:"Bad request"})}
    let message=req.body.message
    if(!message){res.status(400).send({msg:"Bad request"})}
    let user=await user8model.findById(userId)
    console.log(user)
    if(!user){return res.status(404).send({status:false,msg:"user not found"})}
//     let usertobemodified=req.params.userId
//  let userloggedin=decodetoken.userId
//  if(usertobemodified!=userloggedin){return res.send({status:false,msg:"not aurhorised"})}
  let  updatedposts=user.posts
    updatedposts.push(message)
    let updateuser=await user8model.findOneAndUpdate({_id:userId},{posts:updatedposts},{new:true})
res.status(201).send({status:updateuser,data:updateuser})}
catch(err){res.status(500).send({msg:"error",err:err.message})}}

const deleteUser = async function(req,res){
    // let token = req.headers["x-auth-token"];
    // if (!token) return res.send({ status: false, msg: "token must be present" });
    // let decodetoken=jwt.verify(token,'shubham kumar')
    // if(!decodetoken){res.send("invalid token")}
    // let usertobemodified=req.params.userId
    // let userloggedin=decodetoken.userId
    // if(usertobemodified!=userloggedin){return res.send({status:false,msg:"not aurhorised"})}
try{
    let userId = req.params.userId;
    if(!userId){res.status(400).send({msg:"Bad request"})}
    let userDelete = await user8model.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true});
    res.status(201).send({status:true, data:userDelete})}
    catch(err){res.status(500).send({msg:"error",err:err.message})}
  };

module.exports.createuser=createuser
module.exports.loginuser=loginuser
module.exports.getuser=getuser
module.exports.updateuser=updateuser
module.exports.deleteUser=deleteUser