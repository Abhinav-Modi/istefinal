const Board_Act=require('../../Controllers/Board')
const express = require('express');
var cacheService = require("express-api-cache");
var cache = cacheService.cache;

const router=express.Router()

router.post('/addboard',Board_Act.addBoard)
router.get('/getallboard',cache("30 days"),Board_Act.getAllBoards)

module.exports=router