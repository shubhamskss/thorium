const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const user8controller=require("../controllers/user8controller")
const midlleware=require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)
router.post("/user1",user8controller.createuser)
router.post("/login1",user8controller.loginuser)
router.get("/users1/:userId",midlleware.mid1,user8controller.getuser)
router.put("/users1/:userId",midlleware.mid1,user8controller.updateuser)
router.delete("/users1/:userId",midlleware.mid1,user8controller.deleteUser)
module.exports = router;