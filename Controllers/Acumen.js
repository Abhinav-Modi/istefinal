const Acumen=require('../Models/Acumen')




const getallevent=async(req,res)=>{
    try{
        await Acumen.find()
        .then((acumen)=>{
            res.status(200).json({
                message:"All User Fetched Successfully",
                body:acumen
            })
        })
    }catch(error){
        res.status(400).json({
            error:error
        })
    }
}

module.exports.getallevent=getallevent