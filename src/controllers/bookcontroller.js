const bookschema = require("../models/bookschema")

let booklist = async function(req,res){
    let data = req.body
    let savedbook= await bookschema.create(data)
    res.send({savedbook})
}
let readbook = async function(req,res){
    let listofbooks=await bookschema.find()
    res.send({ "list":listofbooks})
}
module.exports.booklist=booklist
module.exports.readbook=readbook

