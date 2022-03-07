const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")
let user1Controller=require("../controllers/user1controller")
let productController=require("../controllers/productcontroller")
let ordercontroller=require("../controllers/ordercontroller")

const middleware=require("../middleware/middleware1")

router.post("/user1",middleware.mid1,user1Controller.saveuser)
router.post("/product121",productController.saveproduct)
router.post("/purchase",middleware.mid1,ordercontroller.placeorder)
router.get("/update",ordercontroller.update1st)
module.exports = router;