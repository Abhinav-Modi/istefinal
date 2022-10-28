const router=require('express').Router()
const Time_Act=require('../../Controllers/Timer')
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

router.get('/gettimer',cache("30 days"),Time_Act.getTimer)

module.exports=router