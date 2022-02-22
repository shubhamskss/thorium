const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/movies', function(req,res){
    const array = ['the shining','incendies','rang de basanti','finding demo']
    res.send(array)
})
router.get('/movies/:movieId', function(req,res){
    let movies = ['the shining','incendies','rang de basanti','finding demo']
let value = req.params.movieId
if(value>movies.length-1){
    res.send('movies with this id not exist')
}
else {res.send(movies[value])}
})
router.get('/films', function(req,res){
    res.send([{"id":1,"name":"incendies"},
    {"id":2,"name":"incendies"},
    {"id":3,"name":"rang de basanti"},
    {"id":4,"name":"finding demo"} ]       )
})
router.get('/films/:filmid',function(req,res){
    let arr = [{"id":1,"name":"incendies"},
    {"id":2,"name":"incendies"},
    {"id":3,"name":"rang de basanti"},
    {"id":4,"name":"finding demo"} ]
    let value = req.params.filmid
    for(i=0;i<arr.length;i++){
        if(arr[i].id==value){
            res.send(arr[i])
            break;
        }
        else{res.send("id not found")}
    }


})
module.exports = router;
