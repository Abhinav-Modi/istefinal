const Email_Act=require('../../Controllers/Email')
const router=require('express').Router()


router.post('/postemail',Email_Act.postEmail)

module.exports=router