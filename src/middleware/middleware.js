
let mid1=function(req,res,next){



let token=req.headers["x-auth-token"]
    if(!token){return res.send({status:false,msg:"token required"})}
res.send({status:true,data:token})
    let decodetoken=jwt.verify(token,'shubham kumar')
    if(!decodetoken){res.send("invalid token")}
next()
}
module.exports.mid1=mid1