const router=require('express').Router()
const Event_Act=require('../../Controllers/Event')
const Timer_Act=require('../../Controllers/Timer')
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

router.post('/addevent',Event_Act.postEvent);
router.get('/getallevent',cache("30 days"),Event_Act.getallevent)




module.exports=router;
