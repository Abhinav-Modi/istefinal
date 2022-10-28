const mongoose = require('mongoose');

const EventSchema=mongoose.Schema({
    event_name:{
        type:String,
        required:true,
    },
    event_description:{
        type:String,
        required:true,
    }
})

var eventData=mongoose.model("eventData",EventSchema)
module.exports=eventData

