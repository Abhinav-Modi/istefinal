const MCWC_Act=require('../../Controllers/MCWC')
const router=require('express').Router()


router.get('/getMC',MCWC_Act.getAllMC)
router.get('/getWC',MCWC_Act.getAllWC)


module.exports=router