const mongoose = require('mongoose');

const AcumenSchema=mongoose.Schema({
    event_name:{
        type:String,
        required:true,
    },
    event_description:{
        type:String,
        required:true,
    }
})


var AcumenData=mongoose.model('AcumenData',AcumenSchema);
module.exports=AcumenData