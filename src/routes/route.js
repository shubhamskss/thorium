const express = require('express');
const router = express.Router();

const newauthorcontroller=require("../controllers/newauthorcontroller")
const newbookcontroller=require("../controllers/newbookcontroller")




// router.post("/createUser", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.post("/CreateAuth",newauthorcontroller.createauthor)
router.post("/CreatePub",newauthorcontroller.createpublisher)
router.post("/createbook",newauthorcontroller.createbook)
router.get("/Allbooks",newauthorcontroller.allBooks)
router.post("/Books",newbookcontroller.CreateBook)
router.put("/books",newbookcontroller.updateBook)
module.exports = router;