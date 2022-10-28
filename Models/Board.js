const mongoose = require('mongoose');

const boardSchema=mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
        
    },
    github:{
        type:String,
        
    },
    instagram:{
        type:String,
        
    },

    photo:{
        type:String,
        
    },

})


var boardData=mongoose.model('boardData',boardSchema);
module.exports=boardData