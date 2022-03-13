let axios=require("axios")

   const vcByd= async function(req,res){
        try{
         let district =  req.query.district_id
         let date= req.query.date
         
         let options = 
         {   
             method:'get',
             url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}` 
             }
        
             let result = await axios(options)
             
             res.status(200).send({msg : result.data})
        
        
        
        }
        catch(err){ res.status(500).send({error:err.message})}
        
        
        }
        // ==========================================================================================
        let weather=async function(req,res){
            try{
            // try{let cities=["London"]
                let cities=["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
                let newarr=[]
                
                for(let i=0;i<cities.length;i++){
                    let obj={cities:cities[i]}
                let options={
                    method:'get',
                  url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0c4b119b2072973f59ebad027e158bdc`
                }
let result=await axios(options)


let data=result.data
obj.temp=data.main.temp


newarr.push(obj)
}
let sorted=newarr.sort((a,b)=>a.temp-b.temp)
console.log(sorted)
res.status(200).send({data:sorted})



            }
            catch(err){res.status(500).send({error:err.message})}}
        

let meme=async function(req,res){
    try{

let id=req.query.id

let text0=req.query.text0

let text1=req.query.text1


let options={
    method:'post',
    url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`

}
let result=await axios(options)
let data=result.data
res.status(200).send({data:data})



    }
    catch(err){res.status(500).send({error:err.message})}
}


        
module.exports.vcByd=vcByd
module.exports.weather=weather
module.exports.meme=meme