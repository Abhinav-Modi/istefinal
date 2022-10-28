const mongoose = require('mongoose');

const Timer=mongoose.Schema({
    timer_title:{
       
        type:String,
        required:true,
    },
    timer_time:{
        
        type:Date,
        required:true,

    },
    timer_link:{
        default:null,
        type:String,
        
    }

})

var timerdata=mongoose.model('Timer',Timer)
module.exports=timerdata;

