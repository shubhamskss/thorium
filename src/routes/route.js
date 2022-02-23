const express = require('express');
const router = express.Router();

  
   
  

  
  let player = [{
  
    "name": "manish",
  
    "dob": "1/1/1995",
  
    "gender": "male",
  
    "city": "jalandhar",
  
    "sports": [
  
      "swimming"
  
    ],
  
    "bookings": [
  
      
  
  {
  
   "bookingnumber":1,
  
    "sportsid":"ab",
  
    "centerid":"cd",
  
   "type":"private",
  
   "slot": "162865980",
  
   "bookedOn": "31/08/2021",
  "bookedfor": "1/09/2021"
   
  
  },]},
  
   
  
  
  
   
  

  
  
  {
  
    "name": "gopal",
  
    "dob": "1/09/1995",
  
    "gender": "male",
  
    "city": "delhi",
  
    "sports": [
  
      "soccer"
  
    ],
  
    "bookings": [{
        "bookingnumber":2,
       
         "sportsid":"ef",
       
         "centerid":"gh",
       
        "type":"private",
       
        "slot": "162865981",
       
        "bookedOn": "2/09/2021",
       "bookedfor": "3/09/2021"}
        
  
      
  
    ]
  
  },
  
  {
  
    "name": "lokesh",
  
    "dob": "1/1/1990",
  
    "gender": "male",
  
    "city": "mumbai",
  
    "sports": [
  
      "soccer"
  
    ],
  
    "bookings": [
  
       
      
  
    ],
  
  },
  
  
  
  ]
  
   router.post('/playerss', function(req,res){
       let newplayer=req.body.newplayer
       for(i=0;i<player.length;i++){
           if(player[i].name==newplayer.name){
               res.send({"msg":"player already exist"})
           }
           
       else{
       player.push(newplayer)
       res.send({"msg":player})}}
   })
   router.post('/playersss/:playername', function(req,res){
let value = req.params.playername


let resultobj =req.body.resultobj
for(let i=0;i<player.length;i++){
    if(player[i].name!=value){
        res.send({"msg":"Player not exist"})
    }
    if(player[i].name==value && player[i].bookings=='[]'){
        player.push(resultobj)
        res.send({"msg":"resultobj"})
    }
    else{res.send({"msg":"player id already exist"})}
}



   })
   



















module.exports = router;