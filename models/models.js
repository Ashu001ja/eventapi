const mongoose=require('mongoose');

const enevntSechema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('events',enevntSechema);