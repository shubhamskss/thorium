


let mid1= function(req,res,next){
    // req.headers.isFreeAppUser=true
let isFreeAppUser=req.headers.isfreeappuser
// console.log(req.headers)


    if(!isFreeAppUser){
        res.send({"msg":"request is missing a mandatory header"})
    }else
{next()}}

module.exports.mid1=mid1