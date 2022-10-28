const MCWC=require('../Models/MCWC')

const getAllMC=async(req,res)=>{

    try{
        const mc=await MCWC.MCData.find()
        res.status(200).json(mc)

    }catch(error){
        res.status(400).json(error)
    }
}

const getAllWC=async(req,res)=>{
    try{
    const wc=await MCWC.WCData.find()
    res.status(200).json(wc)
    }catch(error){
        res.status(400).json(error)
    }
}

module.exports.getAllMC=getAllMC
module.exports.getAllWC=getAllWC

