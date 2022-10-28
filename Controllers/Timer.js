
const Timer=require('../Models/Timer')

var getTimer=async(req,res)=>{
    try{
        const timer=await Timer.find().limit(1)
        .then((timer)=>{
            res.status(200).json({
                message: "Timer set",
                timer:timer
            })

        })

    }catch(error){
        res.status(400).json({
            error:error
        })
        console.log(error)
        
    }
    
            
}
    
module.exports.getTimer=getTimer