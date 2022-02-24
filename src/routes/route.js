const express = require('express');
const router = express.Router();

  let player=[]
  router.post('/players', function(req,res){
    let playerss=req.body
    for(let i=0;i<player.length;i++){
      if(player[i].name==playerss.name){
       return res.send({"response":"player already exist"})
      }}
      
      player.push(playerss)
      res.send({player})
    
  })
   router.post('/player1/:playername/bookings/:bookingid', function(req,res){
 let playerpresent=false
 let name=req.params.playername
console.log(player)
 for(let i=0;i<player.length;i++){
   if(player[i].name==name){
     playerpresent=true
   }
 }
 if(!playerpresent){
   return res.send("player not present")
 }
 let booking=req.body
 let bookingid=req.params.bookingid
 for(let i=0;i<player.length;i++){if(player[i].name==name){
 for(let j=0;j<player[i].bookings.length;j++){
   if(player[i].bookings[j].bookingNumber==bookingid){
     return res.send("booking with this id is already present")
   }
 }
player[i].bookings.push(booking)}}
res.send(player)
  



   })


module.exports = router;