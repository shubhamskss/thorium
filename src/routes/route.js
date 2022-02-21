let obj = require('./loggers.js')
let obj1 = require('../logger/logger.js')
let obj2 = require('../util/helper.js')
let obj3 =require('../validator/formatter.js')
let _ =require("lodash")
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    
console.log(_.chunk(['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec'], 4));
console.log(_.tail([1,3,5,7,9,11,13,17,19,21]))
console.log(_.fromPairs([["horror","The shining"],["thiller","shutterisland"],["Fantasy","parisLabrynth"]]))
    obj.log('thorium')
    console.log(obj.url)
    obj1.welcome('welcome')
    obj2.helper('helper')
     obj3.trim()
     obj3.convert()
    res.send('Welcome to my first application')
    
});
router.get('/bye',function(req,res){
    res.send('hello there! hi')
})

module.exports = router;
