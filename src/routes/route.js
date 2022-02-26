const express = require('express');
const router = express.Router();
const bookschema=require("../models/bookschema")
const bookcontroller=require("../controllers/bookcontroller")
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

// router.get("/test-me", function (_req, res) {
    // res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/book",bookcontroller.booklist)
router.get("/bookread",bookcontroller.readbook)







module.exports = router;