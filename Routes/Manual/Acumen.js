const router=require('express').Router()
const Acumen_Act=require('../../Controllers/Acumen')
var cacheService = require("express-api-cache");
var cache = cacheService.cache;


router.get('/getallacumen',cache("10 minutes"),Acumen_Act.getallevent)


module.exports=router