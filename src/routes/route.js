const express = require('express');
const router = express.Router();
let assignbookcontroller=require("../controllers/assignbookcontroller")

// router.post("/player",practice1.savedata)

router.post("/createBook",assignbookcontroller.createbook)
router.get("/booklist",assignbookcontroller.Booklist)
router.post("/getBooksinYear",assignbookcontroller.getbooksinyear)
router.post("/getParticularBooks",assignbookcontroller.getparticularbooks)
router.get("/getXINRBooks",assignbookcontroller.getxinrbooks)
router.get("/getRandomBooks",assignbookcontroller.getrandombooks)
module.exports = router;