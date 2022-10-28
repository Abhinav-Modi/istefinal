const mongoose = require('mongoose');

const MCSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    }
})

const WCSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
})

var MCData=mongoose.model('Management Committee',MCSchema)
var WCData=mongoose.model('Working Committee',WCSchema)

module.exports.MCData=MCData
module.exports.WCData=WCData