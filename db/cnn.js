const mongoose=require('mongoose');
require('dotenv').config();
const URL=process.env.MONGODB;

const connectDB=()=>{
    mongoose.connect(URL).then(()=>{
        console.log('MongoDB Connected...');
    });
};

module.exports=connectDB;
 