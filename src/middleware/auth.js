let jwt=require('jsonwebtoken')
let mid1=function(req,res,next){



let token=req.headers["x-auth-token"]
    if(!token){return res.send({status:false,msg:"token required"})}

    let decodetoken=jwt.verify(token,'shubham kumar')
    if(!decodetoken){res.send("invalid token")}
next()
}
let authorisation=function(req,res,next){
    let token=req.headers["x-auth-token"]
    if(!token){return res.send({status:false,msg:"token required"})}
    let decodetoken=jwt.verify(token,'shubham kumar')
    if(!decodetoken){res.send("invalid token")}
    let usertobemodified=req.params.userId
    let userloggedin=decodetoken.userId
    if(usertobemodified!=userloggedin){return res.send({status:false,msg:"not aurhorised"})}
    next()
}
module.exports.mid1=mid1
module.exports.authorisation=authorisation