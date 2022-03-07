let ordermodel=require("../models/ordermodel")
let user1model=require("../models/userModel1")
let productmodel=require("../models/productmodel")
let placeorder=async function(req,res){
    let data=req.body
    let userid=data.userId
    let productid=data.productId
    let checkuser=await user1model.findById(userid)
    if(!checkuser){return res.send("no user with this userid")}
    let checkproduct=await productmodel.findById(productid)
    
    if(!checkproduct){return res.send("no product with this id")}
     let purchaseorder=await ordermodel.create(data)
     res.send(purchaseorder)}

     let update1st=async function(req,res){

     let isFreeAppUser=req.headers.isfreeappuser
     let data=req.body
     let userid=data.userId
     let productid=data.productId
     let checkuser=await user1model.findById(userid)
     let checkproduct=await productmodel.findById(productid)
     console.log(checkproduct)
    let pricevalue=checkproduct.price
    console.log(pricevalue)
    let userbalance=checkuser.userbalance
    if(isFreeAppUser==false){
        if(userbalance>pricevalue){
            let updatedbalance=await user1model.findByIdAndUpdate(
                {_id:userid},
                {inc:{balance:-pricevalue}}
            )
            res.send(updatedbalance)
        }
    }
    }
   












module.exports.placeorder=placeorder
module.exports.update1st=update1st