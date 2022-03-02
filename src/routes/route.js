const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newauthorcontroller=require("../controllers/newauthorcontroller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/CreateAuth",newauthorcontroller.createauthor)
router.post("/CreatePub",newauthorcontroller.createpublisher)
router.post("/createbook",newauthorcontroller.createbook)
router.get("/Allbooks",newauthorcontroller.allBooks)
module.exports = router;