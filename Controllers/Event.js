const Event = require("../Models/Events");

const postEvent=async(req,res)=>{
    const{event_name,event_description}=req.body;
    try{
        await Event.create({
            event_name:event_name,
            event_description:event_description
        }).then((event)=>{
            res.status(200).json({
                message:"Event Added Successfully",
                body:event
            })
        })
    }catch(error){
        res.status(400).json({
            message:"Error Found",
            error:error
        })
    }
    
}

// const editevent=async(req,res)=>{
//     const
// }

const getallevent=async(req,res)=>{
    try{
        await Event.find()
        .then((event)=>{
            res.status(200).json({
                message:"All User Fetched Successfully",
                body:event
            })
        })
    }catch(error){
        res.status(400).json({
            error:error
        })
    }
}
module.exports.postEvent=postEvent
module.exports.getallevent=getallevent