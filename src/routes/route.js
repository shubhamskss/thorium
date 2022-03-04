const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

const mwcontroller=require("../controllers/mwcontroller")
router.post("/save1",mwcontroller.firstmwHandler)
router.get("/Checkdata",mwcontroller.checkdata)
router.get("/practice",mwcontroller.gmwpractice)

module.exports = router;