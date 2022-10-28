const Board=require('../Models/Board')

const addBoard=async(req,res)=>{
    const{id,name,role,linkedin,github,instagram,photo}=req.body
    try{
        await Board.create({
            _id:id,
            name:name,
            linkedin:linkedin,
            role:role,
            github:github,
            photo:photo,
            instagram:instagram

        }).then(board=>{
            res.status(200).json({
                message:"Board created successfully",
                user:board
            })
        })
    }catch(err){
        res.status(400).json({
            error:err
        })
    }
}

const getAllBoards=async(req,res)=>{
    try{
        const board=await Board.find()
        res.status(200).json(board)

    }catch(err){
        res.status(400).json(err)
    }
}

module.exports.addBoard=addBoard
module.exports.getAllBoards=getAllBoards