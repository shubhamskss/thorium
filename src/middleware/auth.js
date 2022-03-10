let jwt=require('jsonwebtoken')
let mid1=function(req,res,next){

try{

let token=req.headers["x-auth-token"]
    if(!token){return res.status(400).send({status:false,msg:"token required"})}

    let decodetoken=jwt.verify(token,'shubham kumar')
    if(!decodetoken){res.status(401).send("invalid token")}
next()}
catch(err){res.status(500).send({mmsg:"error",err:err.message})}
}
let authorisation=function(req,res,next){
  try{  let token=req.headers["x-auth-token"]
    if(!token){return res.status(400).send({status:false,msg:"token required"})}
    let decodetoken=jwt.verify(token,'shubham kumar')
    if(!decodetoken){res.status(401).send("invalid token")}
    let usertobemodified=req.params.userId
    let userloggedin=decodetoken.userId
    if(usertobemodified!=userloggedin){return res.status(403).send({status:false,msg:"not aurhorised"})}
    next()}
    catch(err){res.send({msg:"error",err:err.message})
}}
module.exports.mid1=mid1
module.exports.authorisation=authorisation