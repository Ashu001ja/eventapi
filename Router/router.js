const express=require('express');
const{getevents,eventssend,eventupdate,eventdelete}=require('../controller/controller')
const router=express.Router();

router.route('/').get(getevents);
router.route('/sendevent').post(eventssend);
router.route('/updateevent/:id').patch(eventupdate);
router.route('/deleteevent/:id').delete(eventdelete);
module.exports=router;